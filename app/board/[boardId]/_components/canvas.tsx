'use client';

import { useCallback, useState } from 'react';
import { Info } from './info';
import { Participants } from './participants';
import { ToolBar } from './tool-bar';
import { Camera, CanvasMode, CanvasState } from '@/types/canvas';
import {
  useHistory,
  useCanUndo,
  useCanRedo,
  useMutation,
} from '@/liveblocks.config';
import { CursorPresence } from './cursor-presence';
import { pointerEventToCanvasPoint } from '@/lib/utils';

interface IProps {
  boardId: string;
}

const MAX_LAYERS = 10;

export const Canvas = ({ boardId }: IProps) => {
  const [canvas, setCanvas] = useState<CanvasState>({
    mode: CanvasMode.None,
  });
  const [camera, setCamera] = useState<Camera>({ x: 0, y: 0 });

  const history = useHistory();
  const canUndo = useCanUndo();
  const canRedo = useCanRedo();

  const onPointerMove = useMutation(
    ({ setMyPresence }, e: React.PointerEvent) => {
      e.preventDefault();
      const curr = pointerEventToCanvasPoint(e, camera);
      setMyPresence({ cursor: curr });
    },
    []
  );

  const onWheel = useCallback((e: React.WheelEvent) => {
    setCamera((prev) => ({
      x: prev.x - e.deltaX,
      y: prev.y - e.deltaY,
    }));
  }, []);

  const onPointerLeave = useMutation(({ setMyPresence }) => {
    setMyPresence({ cursor: null });
  }, []);

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
      <svg
        onPointerMove={onPointerMove}
        onWheel={onWheel}
        onPointerLeave={onPointerLeave}
        className="h-screen w-screen"
      >
        <g
          style={{
            transform: `translate(${camera.x}px, ${camera.y}px)`,
          }}
        >
          <CursorPresence />,
        </g>
      </svg>
    </main>
  );
};
