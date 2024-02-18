import { PropsWithChildren } from "react";

export default function Aside({ children, ...rest }: PropsWithChildren) {
  return <aside {...rest}>{children}</aside>;
}
