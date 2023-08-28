import { ReactNode } from "react";

export function Title(props: { children: ReactNode }) {
  return <h1 className="mx-2 text-xl font-bold">{props.children}</h1>;
}
