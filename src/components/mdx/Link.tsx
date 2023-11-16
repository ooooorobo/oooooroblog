import { PropsWithChildren } from "react";

export default ({ children, ...rest }: PropsWithChildren) => (
  <a className={"link"} {...rest}>
    {children}
  </a>
);
