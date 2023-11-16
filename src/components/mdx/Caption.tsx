import { PropsWithChildren } from "react";

export default ({ children, ...rest }: PropsWithChildren) => (
  <p className={"caption"} {...rest}>
    {children}
  </p>
);
