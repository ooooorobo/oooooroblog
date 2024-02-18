import { PropsWithChildren } from "react";

type Props = {
  width: string;
} & PropsWithChildren;

function ImageWrapper({ width, children }: Props) {
  return <div style={{ width, margin: "0 auto" }}>{children}</div>;
}

export default ImageWrapper;
