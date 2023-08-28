"use client";

import { Popover, Transition } from "@headlessui/react";
import {
  BellIcon,
  BellIcon as BellIconOutline,
  Cog6ToothIcon,
  Cog6ToothIcon as Cog6ToothIconOutline,
  HomeIcon as HomeIconOutline,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import {
  BellIcon as BellIconSolid,
  Cog6ToothIcon as Cog6ToothIconSolid,
  HomeIcon as HomeIconSolid,
} from "@heroicons/react/24/solid";
import { cx } from "class-variance-authority";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment, ReactNode } from "react";

export default function MainLayout(props: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="mx-auto flex h-screen max-w-5xl divide-x divide-gray-300 border-x border-gray-300 dark:divide-gray-700 dark:border-gray-700">
      <div className="hidden w-80 flex-shrink-0 p-2 md:block">
        <nav>
          <Link
            className={`flex h-14 items-center gap-4 rounded-md px-4 text-lg transition-colors duration-150 hover:bg-gray-200 hover:dark:bg-gray-800 ${cx(
              pathname === "/home" && "font-bold",
            )}`}
            href="/home"
          >
            {pathname === "/home" ? (
              <HomeIconSolid className="h-6 w-6" />
            ) : (
              <HomeIconOutline className="h-6 w-6" />
            )}
            Home
          </Link>
          <Link
            className={`flex h-14 items-center gap-4 rounded-md px-4 text-lg transition-colors duration-150 hover:bg-gray-200 hover:dark:bg-gray-800 ${cx(
              pathname === "/search" && "font-bold",
            )}`}
            href="/search"
          >
            <MagnifyingGlassIcon
              className={`h-6 w-6 ${cx(
                pathname === "/search" && "stroke-[3px]",
              )}`}
            />
            Search
          </Link>
          <Link
            className={`flex h-14 items-center gap-4 rounded-md px-4 text-lg transition-colors duration-150 hover:bg-gray-200 hover:dark:bg-gray-800 ${cx(
              pathname === "/notifications" && "font-bold",
            )}`}
            href="/notifications"
          >
            {pathname === "/notifications" ? (
              <BellIconSolid className="h-6 w-6" />
            ) : (
              <BellIconOutline className="h-6 w-6" />
            )}
            Notifications
          </Link>
          <Link
            className={`flex h-14 items-center gap-4 rounded-md px-4 text-lg transition-colors duration-150 hover:bg-gray-200 hover:dark:bg-gray-800 ${cx(
              pathname === "/settings" && "font-bold",
            )}`}
            href="/settings"
          >
            {pathname === "/settings" ? (
              <Cog6ToothIconSolid className="h-6 w-6" />
            ) : (
              <Cog6ToothIconOutline className="h-6 w-6" />
            )}
            Settings
          </Link>
        </nav>
      </div>
      <div className="grow">
        <Popover>
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
              <nav>
                <Popover.Button
                  as={Link}
                  className="flex h-14 items-center gap-4 px-4 text-lg transition-colors duration-150 hover:bg-gray-200 hover:dark:bg-gray-800"
                  href="/home"
                >
                  <HomeIconOutline className="h-6 w-6" />
                  Home
                </Popover.Button>
                <Popover.Button
                  as={Link}
                  className="flex h-14 items-center gap-4 px-4 text-lg transition-colors duration-150 hover:bg-gray-200 hover:dark:bg-gray-800"
                  href="/search"
                >
                  <MagnifyingGlassIcon className="h-6 w-6" />
                  Search
                </Popover.Button>
                <Popover.Button
                  as={Link}
                  className="flex h-14 items-center gap-4 px-4 text-lg transition-colors duration-150 hover:bg-gray-200 hover:dark:bg-gray-800"
                  href="/notifications"
                >
                  <BellIcon className="h-6 w-6" />
                  Notifications
                </Popover.Button>
                <Popover.Button
                  as={Link}
                  className="flex h-14 items-center gap-4 px-4 text-lg transition-colors duration-150 hover:bg-gray-200 hover:dark:bg-gray-800"
                  href="/settings"
                >
                  <Cog6ToothIcon className="h-6 w-6" />
                  Settings
                </Popover.Button>
              </nav>
            </Popover.Panel>
          </Transition>
        </Popover>
      </div>
    </div>
  );
}
