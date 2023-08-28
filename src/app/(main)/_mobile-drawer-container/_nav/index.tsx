"use client";

import { useSessionStore } from "@/stores/session";
import { useMounted } from "@/utils/use-mounted";
import { Popover } from "@headlessui/react";
import {
  BellIcon,
  Cog6ToothIcon,
  HomeIcon,
  MagnifyingGlassIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

export function Nav() {
  const mounted = useMounted();
  const session = useSessionStore((state) => state.session);

  if (!mounted) {
    return null;
  }
  return (
    <nav>
      <Popover.Button
        as={Link}
        className="flex h-14 items-center gap-4 px-4 text-lg transition-colors duration-150 hover:bg-gray-200 hover:dark:bg-gray-800"
        href="/home"
      >
        <HomeIcon className="h-6 w-6" />
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
      {session ? (
        <Popover.Button
          as={Link}
          className="flex h-14 items-center gap-4 px-4 text-lg transition-colors duration-150 hover:bg-gray-200 hover:dark:bg-gray-800"
          href={`/profiles/${session.username}`}
        >
          <UserIcon className="h-6 w-6" />
          Profile
        </Popover.Button>
      ) : null}
      <Popover.Button
        as={Link}
        className="flex h-14 items-center gap-4 px-4 text-lg transition-colors duration-150 hover:bg-gray-200 hover:dark:bg-gray-800"
        href="/settings"
      >
        <Cog6ToothIcon className="h-6 w-6" />
        Settings
      </Popover.Button>
    </nav>
  );
}
