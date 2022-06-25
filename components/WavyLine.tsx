import styled from "styled-components";

const WavyLine = styled.div<{size: number}>`
  ${({theme}) => theme.media.desktop(`
    text-align: center;
  `)};
  height: 20px;
  &:after {
    overflow: hidden;
    content: ${({size}) => {
      let c = '';
      for (let i = 0; i < size; i++) {
        c += 'm';
      }
      return `'${c}'`
    }};
    
    color: transparent;
    position: relative;
    top: -10px;
    font-size: 1rem;
    
    text-decoration-style: wavy !important;
    text-decoration: ${({theme}) => theme.colors.primary};
    text-decoration-line: underline;
    
    
  }
`

export default WavyLine