import { Loader } from 'lucide-react';
import { InfoSkeleton } from './info';
import { ToolBarSkeleton } from './tool-bar';
import { ParticipantsSkeleton } from './participants';

export const Loading = () => {
  return (
    <main className="relative flex size-full touch-none items-center justify-center bg-neutral-100">
      <Loader className="size-6 animate-spin text-muted-foreground" />
      <InfoSkeleton />
      <ParticipantsSkeleton />
      <ToolBarSkeleton />
    </main>
  );
};
