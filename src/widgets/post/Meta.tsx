import Head from "next/head";
import { PostMeta } from "@src/entities/posts/types/post";

const Meta = ({ title, description, tags = [] }: Partial<PostMeta>) => {
  const browserTitle = `${title} - oooooroblog`;
  return (
    <Head>
      <title>{browserTitle}</title>
      <meta key={"post"} name={"keywords"} content={tags.join(", ")} />
      <meta key={"post"} name={"description"} content={description} />
    </Head>
  );
};

export default Meta;
