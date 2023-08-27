"use client";

import { Popover, Transition } from "@headlessui/react";
import {
  BellIcon,
  Cog6ToothIcon,
  HomeIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { Bars3Icon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { Fragment } from "react";

export function MenuButton() {
  return (
    <Popover>
      <Popover.Button className="grid h-12 w-12 place-items-center rounded-md duration-150 hover:bg-gray-200 hover:dark:bg-gray-800 md:hidden">
        <span className="sr-only">Menu</span>
        <Bars3Icon className="h-6 w-6" />
      </Popover.Button>
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
        <Popover.Panel className="fixed bottom-0 left-0 top-0 w-full max-w-xs border-r border-gray-300 bg-gray-100 p-2 dark:border-gray-700 dark:bg-gray-900">
          <Popover.Button
            as={Link}
            className="flex h-14 items-center gap-4 rounded-md px-4 text-lg transition-colors duration-150 hover:bg-gray-200 hover:dark:bg-gray-800"
            href="/home"
          >
            <HomeIcon className="h-6 w-6" />
            Home
          </Popover.Button>
          <Popover.Button
            as={Link}
            className="flex h-14 items-center gap-4 rounded-md px-4 text-lg transition-colors duration-150 hover:bg-gray-200 hover:dark:bg-gray-800"
            href="/search"
          >
            <MagnifyingGlassIcon className="h-6 w-6" />
            Search
          </Popover.Button>
          <Popover.Button
            as={Link}
            className="flex h-14 items-center gap-4 rounded-md px-4 text-lg transition-colors duration-150 hover:bg-gray-200 hover:dark:bg-gray-800"
            href="/notifications"
          >
            <BellIcon className="h-6 w-6" />
            Notifications
          </Popover.Button>
          <Popover.Button
            as={Link}
            className="flex h-14 items-center gap-4 rounded-md px-4 text-lg transition-colors duration-150 hover:bg-gray-200 hover:dark:bg-gray-800"
            href="/settings"
          >
            <Cog6ToothIcon className="h-6 w-6" />
            Settings
          </Popover.Button>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
