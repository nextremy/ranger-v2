import { ReactNode } from "react";
import { DesktopDrawer } from "./_desktop-drawer";
import { MobileDrawerContainer } from "./_mobile-drawer-container";

export default function MainLayout(props: { children: ReactNode }) {
  return (
    <div className="mx-auto flex h-screen max-w-5xl divide-x divide-gray-300 border-x border-gray-300 dark:divide-gray-700 dark:border-gray-700">
      <DesktopDrawer />
      <MobileDrawerContainer>
        <div className="grow">{props.children}</div>
      </MobileDrawerContainer>
    </div>
  );
}
