import { TopBar } from "@/components/top-bar";
import { Info } from "./_info";

export default async function Profile(props: { params: { username: string } }) {
  return (
    <>
      <TopBar button="back" title="Profile" />
      <main>
        <Info username={props.params.username} />
      </main>
    </>
  );
}
