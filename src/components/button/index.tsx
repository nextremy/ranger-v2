import { VariantProps, cva } from "class-variance-authority";
import { ComponentPropsWithoutRef } from "react";

const button = cva("rounded-md px-4 font-semibold disabled:opacity-50", {
  variants: {
    intent: {
      primary:
        "bg-blue-700 font-bold text-gray-100 duration-150 enabled:hover:bg-blue-800 dark:bg-blue-300 dark:text-gray-900 enabled:hover:dark:bg-blue-400",
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
});

export function Button({
  className,
  intent,
  size,
  ...props
}: ComponentPropsWithoutRef<"button"> & VariantProps<typeof button>) {
  return <button className={button({ className, intent, size })} {...props} />;
}
