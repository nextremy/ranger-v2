"use client";

import {
  BellIcon as BellIconOutline,
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
import { ReactNode } from "react";

export default function MainLayout(props: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="mx-auto flex h-screen max-w-5xl divide-x divide-gray-300 border-x border-gray-300 dark:divide-gray-700 dark:border-gray-700">
      <div className="hidden w-80 flex-shrink-0 p-2 md:block">
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
      </div>
      <div className="grow">{props.children}</div>
    </div>
  );
}
