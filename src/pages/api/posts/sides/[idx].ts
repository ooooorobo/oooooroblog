import { NextApiRequest, NextApiResponse } from "next";
import { getSidePosts, SidePosts } from "@src/utils/postUtil";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<SidePosts>
) {
  const { idx = 0 } = req.query;
  const posts = await getSidePosts(Number(idx));
  res.status(200).json(posts);
}
