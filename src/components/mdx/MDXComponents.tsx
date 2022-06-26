import CodeBlock from "@src/components/mdx/CodeBlock";
import InlineCode from "@src/components/mdx/InlineCode";
import { MDXComponents } from "mdx/types";

const components: MDXComponents = {
  pre: CodeBlock,
  code: (props) => <InlineCode>{props.children}</InlineCode>,
};

export default components;
