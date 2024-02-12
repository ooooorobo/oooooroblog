import { spawn } from "child_process";
import { defineDocumentType } from "contentlayer/source-files";
import { makeSource } from "contentlayer/source-remote-files";

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: "**/*.mdx",
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    id: { type: "number", required: true },
    description: { type: "string", required: false },
    date: { type: "date", required: true },
    tags: { type: "string" }, //{ type: "list", of: { type: "string" }, required: true },
    seriesId: { type: "string" },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (post) => `posts/${post._raw.flattenedPath}`,
    },
  },
}));

const runBashCommand = (command: string) =>
  new Promise((resolve, reject) => {
    const child = spawn(command, [], { shell: true });

    child.stdout.setEncoding("utf8");
    child.stdout.on("data", (data) => process.stdout.write(data));

    child.stderr.setEncoding("utf8");
    child.stderr.on("data", (data) => process.stderr.write(data));

    child.on("close", function (code) {
      if (code === 0) {
        resolve(void 0);
      } else {
        reject(new Error(`Command failed with exit code ${code}`));
      }
    });
  });

const syncContentFromGit = async (contentDir: string) => {
  const syncRun = async () => {
    const gitUrl = process.env.POST_REPOSITORY_URL;
    await runBashCommand(`
      if [ -d  "${contentDir}" ];
        then
          cd "${contentDir}"; git pull;
        else
          git clone --depth 1 --single-branch ${gitUrl} ${contentDir};
      fi
    `);
  };

  let wasCancelled = false;
  let syncInterval: NodeJS.Timeout;

  const syncLoop = async () => {
    await syncRun();

    if (wasCancelled) return;

    syncInterval = setTimeout(syncLoop, 1000 * 60);
  };

  // Block until the first sync is done
  await syncLoop();

  return () => {
    wasCancelled = true;
    clearTimeout(syncInterval);
  };
};

export default makeSource({
  syncFiles: syncContentFromGit,
  contentDirPath: "src/posts",
  documentTypes: [Post],
});
