import { List } from "./list";
import { NewButton } from "./new-button";

export const Sidebar = () => {
  return (
    <aside className="z-1 text-white fixed left-0 bg-blue-800 h-full w-[60px] flex p-3 flex-col gap-y-4">
      <List />
      <NewButton />
    </aside>
  );
};
