import { PropsWithChildren } from "react";
import { Metadata } from "next";
import { getPostDetail } from "@src/business/post";
import { PostPageProps } from "@src/app/posts/[slug]/page";

export function generateMetadata({
  params: { slug },
}: PostPageProps): Metadata {
  const { detail: post } = getPostDetail(slug);
  return {
    title: post.title,
    description: post.description,
    openGraph: {
      // images: [`/api/og?slug=${slug}`],
    },
  };
}

export default function PostLayout({ children }: PropsWithChildren) {
  return <>{children}</>;
}
