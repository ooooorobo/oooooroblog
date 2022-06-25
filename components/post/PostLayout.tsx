import {ReactElement} from "react";
import {PostMeta} from "../../model/post";
import Meta from "./Meta";
import Comment from "./Comment";

export default function PostLayout({meta, children}: { meta: PostMeta; children: ReactElement }) {
    return <div>
        <Meta title={meta.title} description={meta.description} tags={meta.tags} />
        {children}
        <Comment/>
    </div>
}