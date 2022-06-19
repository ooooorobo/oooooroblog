import {getPosts} from "../../utils/postUtil";
import {NextApiRequest, NextApiResponse} from "next";
import {Post} from "../../model/post";

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Post[]>
) {
    const posts: Post[] = getPosts(0, 10);
    res.status(200).json(posts);
}