import { NextApiRequest, NextApiResponse } from "next";
import { PostListElement } from "@src/model/post";
import PostService from "../../../../../service/postService";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<PostListElement[]>
) {
  const { page = 0, count = 10, tag = "" } = req.query;
  const posts = await PostService.instance.getPostsByTag(
    Number(page) || 0,
    Number(count) || 10,
    tag as string
  );
  res.status(200).json(posts);
}
