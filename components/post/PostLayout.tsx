import {ReactElement} from "react";
import {PostMeta} from "../../model/post";
import Meta from "./Meta";
import Comment from "./Comment";
import styled from "styled-components";
import PostTitle from "./PostTitle";

export default function PostLayout({meta, children}: { meta: PostMeta; children: ReactElement }) {
    return <>
        <PostHeader>
            <Meta title={meta.title} description={meta.description} tags={meta.tags} postedAt={meta.postedAt} />
            <PostTitle meta={meta}/>
            <Line />
        </PostHeader>
        <Article>
            {children}
            <Line />
        </Article>
        <div>
            <Comment />
        </div>
    </>
}

const PostHeader = styled.div`
  padding: 0 1rem;
  margin-top: 10rem;
  margin-bottom: 3rem;
`

const Article = styled.article`
  max-width: 760px;
  margin: 0 auto 5rem auto;
  padding: 0 1rem;
`;

const Line = styled.div`
  ${({theme}) => theme.media.desktop(`
    text-align: center;
  `)};
  &:after {
    overflow: hidden;
    content: 'loaderloa';
    
    color: transparent;
    position: relative;
    font-size: 1rem;
    
    text-decoration-style: wavy !important;
    text-decoration: ${({theme}) => theme.colors.primary};
    text-decoration-line: underline;
  }
`