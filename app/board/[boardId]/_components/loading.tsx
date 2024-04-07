import { Loader } from 'lucide-react';
import { Info } from './info';
import { ToolBar } from './tool-bar';
import { Participants } from './participants';

export const Loading = () => {
  return (
    <main className="relative flex size-full touch-none items-center justify-center bg-neutral-100">
      <Loader className="size-6 animate-spin text-muted-foreground" />
      <Info.Skeleton />
      <Participants.Skeleton />
      <ToolBar.Skeleton />
    </main>
  );
};
