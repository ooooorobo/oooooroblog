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
  img: (props) => <Img src={props.src} />,
  h1: (props) => <Heading as={"h1"}>{props.children}</Heading>,
  h2: (props) => <Heading as={"h2"}>{props.children}</Heading>,
  h3: (props) => <Heading as={"h3"}>{props.children}</Heading>,
  li: (props) => <Li {...props} />,
};

const Heading = styled.h1`
  border-bottom: 1px solid ${(props) => props.theme.colors.text.secondary};
`;

const Li = styled.li`
  margin: 0.4rem 0;
`;

const Img = styled.img`
  max-width: 100%;
  height: auto;
  display: block;
  margin: 1rem auto;
`;

export default components;
