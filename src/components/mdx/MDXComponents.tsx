import CodeBlock from "@src/components/mdx/CodeBlock";
import InlineCode from "@src/components/mdx/InlineCode";
import { MDXComponents } from "mdx/types";
import Link from "@src/components/mdx/Link";
import styled from "styled-components";

const components: MDXComponents = {
  pre: CodeBlock,
  code: (props) => <InlineCode>{props.children}</InlineCode>,
  a: Link,
  img: (props) => <Img src={props.src} />,
};

const Img = styled.img`
  width: 100%;
  height: auto;
`;

export default components;
