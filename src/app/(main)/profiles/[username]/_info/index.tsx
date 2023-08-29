import { db } from "@/prisma/client";
import { getSession } from "@/utils/get-session";
import Image from "next/image";
import { redirect } from "next/navigation";
import defaultAvatar from "./default-avatar.webp";
import { EditProfileLink } from "./edit-profile-link";

export async function Info(props: { username: string }) {
  const user = await db.user.findUnique({
    select: {
      id: true,
      username: true,
      avatarFilename: true,
      displayName: true,
      description: true,
      followers: { select: { _count: true } },
      following: { select: { _count: true } },
    },
    where: { username: props.username },
  });
  const session = getSession();

  if (!user) {
    redirect("/home");
  }
  return (
    <>
      <div className="aspect-[3] bg-gray-200 dark:bg-gray-800" />
      <div className="relative flex h-20 items-center justify-end px-4">
        <div className="absolute -top-8 left-4 h-24 w-24 rounded-lg bg-gray-100 p-1 dark:bg-gray-900 sm:-top-20 sm:h-36 sm:w-36">
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
        {session?.id === user.id ? <EditProfileLink /> : null}
      </div>
      <div className="px-4">
        <p className="text-xl font-bold">{user.displayName} </p>
        <p className="text-gray-700 dark:text-gray-300">@{user.username}</p>
        <p className="mt-4">{user.description}</p>
      </div>
    </>
  );
}
