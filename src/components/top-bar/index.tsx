import { BackButton } from "./back-button";
import { MenuButton } from "./menu-button";
import { Title } from "./title";

export function TopBar(props: { button: "menu" | "back"; title: string }) {
  return (
    <div className="flex h-16 items-center space-x-2 border-b border-gray-300 px-2 dark:border-gray-700">
      {props.button === "menu" ? <MenuButton /> : null}
      {props.button === "back" ? <BackButton /> : null}
      <Title>{props.title}</Title>
    </div>
  );
}
