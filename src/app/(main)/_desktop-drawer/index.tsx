import { Nav } from "./_nav";

export function DesktopDrawer() {
  return (
    <div className="hidden w-80 flex-shrink-0 md:block">
      <Nav />
    </div>
  );
}
