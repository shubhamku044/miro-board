'use client';

import { useSelf } from '@/liveblocks.config';
import { Info } from './info';
import { Participants } from './participants';
import { ToolBar } from './tool-bar';

interface IProps {
  boardId: string;
}

export const Canvas = ({ boardId }: IProps) => {
  const { name } = useSelf();
  return (
    <main className="relative size-full touch-none bg-neutral-100">
      <Info />
      <Participants />
      <ToolBar />
    </main>
  );
};
