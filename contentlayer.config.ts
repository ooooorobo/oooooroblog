import { defineDocumentType, makeSource } from "contentlayer/source-files";

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: "**/*.mdx",
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    id: { type: "number", required: true },
    description: { type: "string", required: false },
    date: { type: "date", required: true },
    tags: { type: "string", required: true }, //{ type: "list", of: { type: "string" }, required: true },
    seriesId: { type: "string" },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (post) => `posts/${post._raw.flattenedPath}`,
    },
  },
}));

export default makeSource({
  contentDirPath: "src/posts",
  documentTypes: [Post],
});
