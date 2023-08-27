import { ReactNode } from "react";

export function Title(props: { children: ReactNode }) {
  return <h1 className="mx-2 text-lg font-medium">{props.children}</h1>;
}
