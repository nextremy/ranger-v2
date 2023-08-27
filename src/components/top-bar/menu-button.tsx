"use client";

import { Popover } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/24/solid";

export function MenuButton() {
  return (
    <Popover.Button className="grid h-12 w-12 place-items-center rounded-md duration-150 hover:bg-gray-200 hover:dark:bg-gray-800 md:hidden">
      <span className="sr-only">Menu</span>
      <Bars3Icon className="h-6 w-6" />
    </Popover.Button>
  );
}
