import { PropsWithChildren } from "react";

export default function Link({ children, ...rest }: PropsWithChildren) {
  return (
    <a className={"link"} {...rest}>
      {children}
    </a>
  );
}
