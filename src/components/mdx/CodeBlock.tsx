import {Highlight, themes} from "prism-react-renderer";
import styled from "styled-components";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function CodeBlock(props: any) {
  const className = props.children?.props.className || "";
  const matches = className.match(/language-(?<lang>.*)/);
  return (
    <Highlight
      theme={themes.oceanicNext}
      code={props.children?.props.children}
      language={
        matches && matches.groups && matches.groups.lang
          ? matches.groups.lang
          : ""
      }
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <Pre className={className} style={style}>
          {tokens.map(
            (line, i) =>
              // 마지막 줄은 무조건 \n만 있음
              i < tokens.length - 1 && (
                <Line key={i} {...getLineProps({ line })}>
                  <LineNo>{i + 1}</LineNo>
                  <LineContent>
                    {line.map((token, key) => (
                      <span key={key} {...getTokenProps({ token })} />
                    ))}
                  </LineContent>
                </Line>
              ),
          )}
        </Pre>
      )}
    </Highlight>
  );
}

const Pre = styled.pre`
  text-align: left;
  margin: 2em 0;
  padding: 0.5em;
  overflow: auto;
  font-size: ${({ theme }) => theme.fontSizes.s};
`;

const Line = styled.div`
  display: table-row;
`;

const LineNo = styled.span`
  display: table-cell;
  text-align: right;
  padding-right: 1em;
  user-select: none;
  opacity: 0.5;
`;

const LineContent = styled.span`
  display: table-cell;
`;
