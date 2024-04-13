'use client';

import { useState } from 'react';
import { Info } from './info';
import { Participants } from './participants';
import { ToolBar } from './tool-bar';
import { CanvasMode, CanvasState } from '@/types/canvas';
import { useHistory, useCanUndo, useCanRedo } from '@/liveblocks.config';

interface IProps {
  boardId: string;
}

export const Canvas = ({ boardId }: IProps) => {
  const [canvas, setCanvas] = useState<CanvasState>({
    mode: CanvasMode.None,
  });

  const history = useHistory();
  const canUndo = useCanUndo();
  const canRedo = useCanRedo();
  return (
    <main className="relative size-full touch-none bg-neutral-100">
      <Info boardId={boardId} />
      <Participants />
      <ToolBar
        canvasState={canvas}
        setCanvasState={setCanvas}
        undo={history.undo}
        redo={history.redo}
        canUndo={canUndo}
        canRedo={canRedo}
      />
    </main>
  );
};
