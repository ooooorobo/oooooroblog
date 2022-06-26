import { getPosts } from "../../utils/postUtil";
import { NextApiRequest, NextApiResponse } from "next";
import { PostListElement } from "../../model/post";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<PostListElement[]>
) {
  const posts = await getPosts(0, 10);
  res.status(200).json(posts);
}
