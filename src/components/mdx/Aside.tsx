import { PropsWithChildren } from "react";

export default ({ children, ...rest }: PropsWithChildren) => (
  <aside {...rest}>{children}</aside>
);
