"use client";

import { Popover, Transition } from "@headlessui/react";
import { Fragment, ReactNode } from "react";
import { Nav } from "./_nav";

export function MobileDrawerContainer(props: { children: ReactNode }) {
  return (
    <Popover as={Fragment}>
      {props.children}
      <Transition
        as={Fragment}
        enter="transition-opacity ease-out duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity ease-in duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <Popover.Overlay className="fixed inset-0 bg-black/25" />
      </Transition>
      <Transition
        as={Fragment}
        enter="transition-transform ease-out duration-300"
        enterFrom="-translate-x-full"
        enterTo="translate-x-0"
        leave="transition-transform ease-in duration-200"
        leaveFrom="translate-x-0"
        leaveTo="-translate-x-full"
      >
        <Popover.Panel className="fixed bottom-0 left-0 top-0 w-full max-w-xs border-r border-gray-300 bg-gray-100 dark:border-gray-700 dark:bg-gray-900">
          <Nav />
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
