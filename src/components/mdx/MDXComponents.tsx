import { MDXComponents } from "mdx/types";
import CodeBlock from "@src/components/mdx/CodeBlock";
import InlineCode from "@src/components/mdx/InlineCode";
import Link from "@src/components/mdx/Link";
import styled from "styled-components";
import BlockQuote from "@src/components/mdx/BlockQuote";

const components: MDXComponents = {
  blockquote: (props) => <BlockQuote>{props.children}</BlockQuote>,
  pre: CodeBlock,
  code: (props) => <InlineCode>{props.children}</InlineCode>,
  a: Link,
  img: (props) => (
    <a href={props.src}>
      <Img src={props.src} />
    </a>
  ),
};

const Img = styled.img`
  max-width: 100%;
  height: auto;
  display: block;
  margin: 3rem auto;
  cursor: pointer;
`;

export default components;
