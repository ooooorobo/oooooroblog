import {PostListElement} from "../../model/post";
import Link from "next/link";
import styled from "styled-components";
import Tag from "../Tag";

interface PostListElementProps {
    post: PostListElement;
}

export default function PostListElementComponent({post}: PostListElementProps) {
    return <>
        <div>{post.meta.tags.map(tag => <Tag key={tag} name={tag} />)}</div>
        <Link href={`/posts/${post.slug}`}>
            <a>
                <Title>{post.meta.title}</Title>
                <Description>{post.meta.description}</Description>
                <Info>{post.meta.postedAt}</Info>
            </a>
        </Link>
    </>
}

const Title = styled.h2`
margin: 0.5rem 0; 
  font-size: ${({theme}) => theme.fontSizes.l};
`

const Description = styled.p`
  margin: 0.5rem 0;
  font-size: ${({theme}) => theme.fontSizes.s};
`

const Info = styled.p`
  font-size: ${({theme}) => theme.fontSizes.s};
  color: ${({theme}) => theme.colors.text.secondary};
  margin: 0 !important;
`