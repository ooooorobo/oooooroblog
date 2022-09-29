import { PostListElement } from "@src/model/post";
import PostListElementComponent from "./PostListElement";

interface PostListProps {
  posts: PostListElement[];
}

export default function PostList({ posts }: PostListProps) {
  return (
    <>
      {posts.map((post) => (
        <PostListElementComponent key={post.slug} post={post} />
      ))}
    </>
  );
}
