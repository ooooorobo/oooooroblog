import { keyframes } from "styled-components";

export const FadeIn = (y: string) => keyframes`
    0% {
      opacity: 0;
      transform: translate3d(0, ${y}, 0);
    }
    to {
      opacity: 1;
      transform: translateZ(0);
    }
`;
