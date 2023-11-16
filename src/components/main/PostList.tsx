import { PostListElement } from "@src/types/post";
import PostListElementComponent from "./PostListElement";

interface PostListProps {
  posts: PostListElement[];
  onClickPost?: () => void;
}

export default function PostList({ posts, onClickPost }: PostListProps) {
  return (
    <>
      {posts.map((post) => (
        <PostListElementComponent
          key={post.slug}
          post={post}
          onClickPost={onClickPost}
        />
      ))}
    </>
  );
}
