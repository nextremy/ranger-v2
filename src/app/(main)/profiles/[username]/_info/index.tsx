import { Button } from "@/components/button";
import { db } from "@/prisma/client";
import { getSession } from "@/utils/get-session";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import defaultAvatar from "./default-avatar.webp";

export async function Info(props: { username: string }) {
  const user = await db.user.findUnique({
    where: { username: props.username },
  });
  const session = getSession();

  if (!user) {
    redirect("/home");
  }
  return (
    <>
      <div className="aspect-[3] bg-gray-200 dark:bg-gray-800" />
      <div className="relative flex justify-end p-4">
        <div className="absolute -top-10 left-4 h-28 w-28 rounded-lg bg-gray-100 p-1 dark:bg-gray-900 sm:-top-16 sm:h-32 sm:w-32 md:-top-20 md:h-36 md:w-36">
          <Image
            alt={`${user.displayName}'s avatar`}
            className="relative rounded-md"
            height={160}
            priority
            src={
              user.avatarFilename
                ? `/avatars/${user.avatarFilename}`
                : defaultAvatar
            }
            width={160}
          />
        </div>
        {session?.id === user.id ? (
          <Button asChild intent="secondary">
            <Link href="/edit-profile">Edit profile</Link>
          </Button>
        ) : null}
      </div>
      <div className="px-4">
        <p className="text-xl font-bold">{user.displayName} </p>
        <p className="text-gray-700 dark:text-gray-300">@{user.username}</p>
        <p className="mt-4">{user.description}</p>
      </div>
    </>
  );
}
