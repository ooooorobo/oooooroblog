import { PropsWithChildren } from "react";

export default function Caption({ children, ...rest }: PropsWithChildren) {
  return (
    <p className={"caption"} {...rest}>
      {children}
    </p>
  );
}
