"use client";

import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";

export function BackButton() {
  const router = useRouter();

  return (
    <button
      className="grid h-12 w-12 place-items-center rounded-md duration-150 hover:bg-gray-200 hover:dark:bg-gray-800"
      onClick={() => router.back()}
    >
      <span className="sr-only">Back</span>
      <ArrowLeftIcon className="h-6 w-6" />
    </button>
  );
}
