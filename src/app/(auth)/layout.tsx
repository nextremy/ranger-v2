import { ReactNode } from "react";

export default function AuthLayout(props: { children: ReactNode }) {
  return (
    <main className="grid min-h-screen place-items-center p-2">
      {props.children}
    </main>
  );
}
