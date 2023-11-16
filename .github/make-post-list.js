const core = require("@actions/core");
const fs = require("fs");
const path = require("path");

const postBasePath = "/src/posts";
const blogPath = "https://www.oooooroblog.com";
const getPostPath = (filePath) =>
  path.join(process.cwd(), postBasePath, filePath);

const readFromDirectory = async (dirPath) => {
  return new Promise((resolve, reject) => {
    fs.readdir(dirPath, (err, files) => {
      if (err) reject(err);
      resolve(files);
    });
  });
};

const readFile = async (dirPath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(dirPath, (err, file) => {
      if (err) reject(err);
      resolve(file);
    });
  });
};
const writeFile = async (dirPath, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(dirPath, data, (err, file) => {
      if (err) reject(err);
      resolve(file);
    });
  });
};

const getFileStat = async (filenameWithPath) => {
  return new Promise((resolve, reject) => {
    fs.stat(filenameWithPath, (err, stats) => {
      if (err) reject(err);
      resolve(stats);
    });
  });
};

const getAllFilePath = async (dirPath) => {
  const names = (await readFromDirectory(dirPath)).map((name) => ["", name]);
  const filePaths = [];
  for (const [dir, name] of names) {
    const joined = path.join(dirPath, dir, name);
    if ((await getFileStat(joined)).isFile()) {
      filePaths.push([dir, name].join("/"));
    } else {
      names.push(
        ...(await readFromDirectory(joined)).map((foundName) => [
          [dir, name].join("/"),
          foundName,
        ])
      );
    }
  }
  return filePaths;
};

const getFileMeta = async (filePath) => {
  const fileContents = await readFile(filePath);
  const metadataRegex = /---\n([\s\S]*?)\n---/;
  const match = fileContents.toString().match(metadataRegex);

  if (match && match[1]) {
    // 메타데이터 문자열 분리
    const metadataStr = match[1];
    const metadataLines = metadataStr.split("\n");

    // 메타데이터를 JSON 객체로 변환
    const metadataJson = {};
    metadataLines.forEach((line) => {
      const [key, value] = line.split(":").map((s) => s.trim());
      if (key && value) {
        metadataJson[key] = value;
      }
    });

    return metadataJson;
  } else {
    console.log("No metadata found in the file.");
  }
};

const postCount = 5;

(async () => {
  const paths = await getAllFilePath(getPostPath(""));
  const fileStats = await Promise.all(
    paths.map(async (filePath) => ({
      filePath,
      stat: await getFileStat(path.join(process.cwd(), postBasePath, filePath)),
    }))
  );
  const filtered = fileStats
    .sort(({ stat: a }, { stat: b }) => b.birthtimeMs - a.birthtimeMs)
    .slice(0, postCount);
  const metas = await Promise.all(
    filtered
      .map(({ filePath }) => getFileMeta(getPostPath(filePath)))
      .filter(Boolean)
  );
  const posts = filtered.map(({ filePath, stat: { birthtime } }, index) => {
    return {
      path: `${blogPath}/posts${filePath.replace(".mdx", "")}`,
      meta: metas[index],
      birthtime,
    };
  });
  core.setOutput("posts", JSON.stringify(JSON.stringify(posts)));
})();
