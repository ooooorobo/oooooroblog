import { MDXComponents } from "mdx/types";
import styled from "styled-components";
import CodeBlock from "@src/widgets/mdx/CodeBlock";
import InlineCode from "@src/widgets/mdx/InlineCode";
import Link from "@src/widgets/mdx/Link";
import BlockQuote from "@src/widgets/mdx/BlockQuote";

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
  h1: (props) => <Heading as={"h1"}>{props.children}</Heading>,
  h2: (props) => <Heading as={"h2"}>{props.children}</Heading>,
  h3: (props) => <Heading as={"h3"}>{props.children}</Heading>,
};

const Heading = styled.h1`
  border-bottom: 1px solid ${(props) => props.theme.colors.text.secondary};
`;

const Img = styled.img`
  max-width: 100%;
  height: auto;
  display: block;
  margin: 1rem auto;
  cursor: pointer;
`;

export default components;
