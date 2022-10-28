import styled from "styled-components";

const WavyLine = styled.div<{ size: number; top?: string; height?: string }>`
  ${({ theme }) =>
    theme.media.desktop(`
    text-align: center;
  `)};
  height: ${({ height = "20px" }) => height};
  &:after {
    overflow: hidden;
    content: ${({ size }) => {
      let c = "";
      for (let i = 0; i < size; i++) {
        c += "m";
      }
      return `'${c}'`;
    }};

    color: transparent;
    position: relative;
    top: ${({ top = "-10px" }) => top};
    font-size: 1rem;

    text-decoration-style: wavy !important;
    text-decoration: ${({ theme }) => theme.colors.primary};
    text-decoration-line: underline;
  }
`;

export default WavyLine;
