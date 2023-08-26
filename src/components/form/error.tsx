import { ComponentPropsWithoutRef } from "react";

export function Error({ className, ...props }: ComponentPropsWithoutRef<"p">) {
  return (
    <p
      className={`text-sm font-medium tracking-wide text-red-700 dark:text-red-300 ${className}`}
      role="alert"
      {...props}
    />
  );
}
