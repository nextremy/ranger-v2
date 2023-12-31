import { Slot } from "@radix-ui/react-slot";
import { VariantProps, cva } from "class-variance-authority";
import { ComponentPropsWithoutRef } from "react";

const button = cva(
  "block flex items-center justify-center gap-2 rounded-md px-4 font-semibold disabled:opacity-50",
  {
    variants: {
      intent: {
        primary:
          "bg-blue-700 font-bold text-gray-100 duration-150 hover:bg-blue-800 disabled:hover:bg-blue-700 dark:bg-blue-300 dark:text-gray-900 hover:dark:bg-blue-400 disabled:hover:dark:bg-blue-300",
        secondary:
          "bg-gray-200 duration-150 hover:bg-gray-300 disabled:hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 disabled:hover:dark:bg-gray-800",
      },
      size: {
        small: "h-12",
        medium: "h-14",
        large: "h-16",
      },
    },
    defaultVariants: {
      intent: "primary",
      size: "small",
    },
  },
);

export function Button({
  asChild,
  className,
  intent,
  size,
  ...props
}: { asChild?: boolean } & ComponentPropsWithoutRef<"button"> &
  VariantProps<typeof button>) {
  const Component = asChild ? Slot : "button";
  return (
    <Component className={button({ className, intent, size })} {...props} />
  );
}
