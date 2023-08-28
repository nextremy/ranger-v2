"use client";

import { useSessionStore } from "@/stores/session";
import { useMounted } from "@/utils/use-mounted";
import {
  BellIcon as BellIconOutline,
  Cog6ToothIcon as Cog6ToothIconOutline,
  HomeIcon as HomeIconOutline,
  MagnifyingGlassIcon,
  UserIcon as UserIconOutline,
} from "@heroicons/react/24/outline";
import {
  BellIcon as BellIconSolid,
  Cog6ToothIcon as Cog6ToothIconSolid,
  HomeIcon as HomeIconSolid,
  UserIcon as UserIconSolid,
} from "@heroicons/react/24/solid";
import { cx } from "class-variance-authority";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Nav() {
  const mounted = useMounted();
  const pathname = usePathname();
  const session = useSessionStore((state) => state.session);

  if (!mounted) {
    return null;
  }
  return (
    <nav className="p-2">
      <Link
        className={cx(
          "flex h-14 items-center gap-4 rounded-md px-4 text-lg transition-colors duration-150 hover:bg-gray-200 hover:dark:bg-gray-800",
          pathname === "/home" && "font-bold",
        )}
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
        className={cx(
          "flex h-14 items-center gap-4 rounded-md px-4 text-lg transition-colors duration-150 hover:bg-gray-200 hover:dark:bg-gray-800",
          pathname === "/search" && "font-bold",
        )}
        href="/search"
      >
        <MagnifyingGlassIcon
          className={`h-6 w-6 ${cx(pathname === "/search" && "stroke-[3px]")}`}
        />
        Search
      </Link>
      <Link
        className={cx(
          "flex h-14 items-center gap-4 rounded-md px-4 text-lg transition-colors duration-150 hover:bg-gray-200 hover:dark:bg-gray-800",
          pathname === "/notifications" && "font-bold",
        )}
        href="/notifications"
      >
        {pathname === "/notifications" ? (
          <BellIconSolid className="h-6 w-6" />
        ) : (
          <BellIconOutline className="h-6 w-6" />
        )}
        Notifications
      </Link>
      {session ? (
        <Link
          className={cx(
            "flex h-14 items-center gap-4 rounded-md px-4 text-lg transition-colors duration-150 hover:bg-gray-200 hover:dark:bg-gray-800",
            pathname === `/profiles/${session.username}` && "font-bold",
          )}
          href={`/profiles/${session.username}`}
        >
          {pathname === `/profiles/${session.username}` ? (
            <UserIconSolid className="h-6 w-6" />
          ) : (
            <UserIconOutline className="h-6 w-6" />
          )}
          Profile
        </Link>
      ) : null}
      <Link
        className={cx(
          "flex h-14 items-center gap-4 rounded-md px-4 text-lg transition-colors duration-150 hover:bg-gray-200 hover:dark:bg-gray-800",
          pathname === "/settings" && "font-bold",
        )}
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
  );
}
