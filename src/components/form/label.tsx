import { ComponentPropsWithoutRef } from "react";

export function Label({
  className,
  ...props
}: ComponentPropsWithoutRef<"label">) {
  return (
    <label
      className={`text-sm font-semibold tracking-wide ${className}`}
      {...props}
    />
  );
}
