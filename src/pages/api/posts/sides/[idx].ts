import { NextApiRequest, NextApiResponse } from "next";
import PostService, { SidePosts } from "../../../../service/postService";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<SidePosts>
) {
  const { idx = 0 } = req.query;
  const posts = await PostService.instance.getSidePosts(Number(idx));
  res.status(200).json(posts);
}
