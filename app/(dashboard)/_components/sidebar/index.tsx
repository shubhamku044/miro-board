import { List } from "./list";
import { NewButton } from "./new-button";

export const Sidebar = () => {
  return (
    <aside className="fixed left-0 z-10 flex h-full w-[60px] flex-col gap-y-4 bg-blue-800 p-3 text-white">
      <List />
      <NewButton />
    </aside>
  );
};
