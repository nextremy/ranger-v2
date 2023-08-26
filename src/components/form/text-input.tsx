import { ComponentPropsWithoutRef, ForwardedRef, forwardRef } from "react";

export const TextInput = forwardRef(function TextInput(
  { className, ...props }: ComponentPropsWithoutRef<"input">,
  ref: ForwardedRef<HTMLInputElement>,
) {
  return (
    <input
      className={`h-12 rounded-md bg-gray-300 px-4 dark:bg-gray-700 ${className}`}
      ref={ref}
      {...props}
    />
  );
});
