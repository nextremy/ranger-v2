import { Button } from "@/components/button";
import Link from "next/link";

export function EditProfileLink() {
  return (
    <Button asChild intent="secondary">
      <Link href="/edit-profile">Edit profile</Link>
    </Button>
  );
}
