import { NextApiRequest, NextApiResponse } from "next";
import PostUtil, { SidePosts } from "@src/utils/postUtil";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<SidePosts>
) {
  const { idx = 0 } = req.query;
  const posts = await PostUtil.instance.getSidePosts(Number(idx));
  res.status(200).json(posts);
}
