import { useSelectionBounds } from '@/hooks/use-selection-bounds';
import { useSelf, useStorage } from '@/liveblocks.config';
import { LayerType, Side, XYWH } from '@/types/canvas';
import { memo } from 'react';

interface IProps {
  onResizeHandlePointerDown: (corner: Side, initialBounds: XYWH) => void;
}

const HANDLE_WIDTH = 8;

export const SelectionBox = memo(({ onResizeHandlePointerDown }: IProps) => {
  const soleLayerId = useSelf((me) =>
    me.presence.selection.length === 1 ? me.presence.selection[0] : null
  );

  const isShowingHandles = useStorage(
    (root) =>
      soleLayerId && root.layers.get(soleLayerId)?.type !== LayerType.Path
  );

  const bounds = useSelectionBounds();

  if (!bounds) return null;

  return (
    <>
      <rect
        className="pointer-events-none fill-transparent stroke-blue-500 stroke-1"
        style={{
          transform: `translate(${bounds.x}px, ${bounds.y}px)`,
        }}
        x={0}
        y={0}
        width={bounds.width}
        height={bounds.height}
      />
      {isShowingHandles && (
        <>
          <rect
            className="fill-white stroke-blue-500 stroke-1"
            style={{
              cursor: 'nwse-resize',
              width: `${HANDLE_WIDTH}px`,
              height: `${HANDLE_WIDTH}px`,
              transform: `translate(${bounds.x - HANDLE_WIDTH / 2}px, ${
                bounds.y - HANDLE_WIDTH / 2
              }px)`,
            }}
            x={0}
            y={0}
            onPointerDown={(e) => {
              e.stopPropagation();
              onResizeHandlePointerDown(Side.Top + Side.Left, bounds);
            }}
          />
          <rect
            className="fill-white stroke-blue-500 stroke-1"
            style={{
              cursor: 'ns-resize',
              width: `${HANDLE_WIDTH}px`,
              height: `${HANDLE_WIDTH}px`,
              transform: `translate(${bounds.x + bounds.width / 2 - HANDLE_WIDTH / 2}px, ${
                bounds.y - HANDLE_WIDTH / 2
              }px)`,
            }}
            x={0}
            y={0}
            onPointerDown={(e) => {
              e.stopPropagation();
              onResizeHandlePointerDown(Side.Top, bounds);
            }}
          />
          <rect
            className="fill-white stroke-blue-500 stroke-1"
            style={{
              cursor: 'nesw-resize',
              width: `${HANDLE_WIDTH}px`,
              height: `${HANDLE_WIDTH}px`,
              transform: `translate(${bounds.x - HANDLE_WIDTH / 2 + bounds.width}px, ${
                bounds.y - HANDLE_WIDTH / 2
              }px)`,
            }}
            x={0}
            y={0}
            onPointerDown={(e) => {
              e.stopPropagation();
              onResizeHandlePointerDown(Side.Top + Side.Right, bounds);
            }}
          />
          <rect
            className="fill-white stroke-blue-500 stroke-1"
            style={{
              cursor: 'ew-resize',
              width: `${HANDLE_WIDTH}px`,
              height: `${HANDLE_WIDTH}px`,
              transform: `translate(${bounds.x - HANDLE_WIDTH / 2 + bounds.width}px, ${
                bounds.y + bounds.height / 2 - HANDLE_WIDTH / 2
              }px)`,
            }}
            x={0}
            y={0}
            onPointerDown={(e) => {
              e.stopPropagation();
              onResizeHandlePointerDown(Side.Right, bounds);
            }}
          />
          <rect
            className="fill-white stroke-blue-500 stroke-1"
            style={{
              cursor: 'nwse-resize',
              width: `${HANDLE_WIDTH}px`,
              height: `${HANDLE_WIDTH}px`,
              transform: `translate(${bounds.x - HANDLE_WIDTH / 2 + bounds.width}px, ${
                bounds.y + bounds.height - HANDLE_WIDTH / 2
              }px)`,
            }}
            x={0}
            y={0}
            onPointerDown={(e) => {
              e.stopPropagation();
              onResizeHandlePointerDown(Side.Bottom + Side.Right, bounds);
            }}
          />
          <rect
            className="fill-white stroke-blue-500 stroke-1"
            style={{
              cursor: 'ns-resize',
              width: `${HANDLE_WIDTH}px`,
              height: `${HANDLE_WIDTH}px`,
              transform: `translate(${bounds.x - HANDLE_WIDTH / 2 + bounds.width / 2}px, ${
                bounds.y + bounds.height - HANDLE_WIDTH / 2
              }px)`,
            }}
            x={0}
            y={0}
            onPointerDown={(e) => {
              e.stopPropagation();
              onResizeHandlePointerDown(Side.Bottom, bounds);
            }}
          />
          <rect
            className="fill-white stroke-blue-500 stroke-1"
            style={{
              cursor: 'nesw-resize',
              width: `${HANDLE_WIDTH}px`,
              height: `${HANDLE_WIDTH}px`,
              transform: `translate(${bounds.x - HANDLE_WIDTH / 2}px, ${
                bounds.y + bounds.height - HANDLE_WIDTH / 2
              }px)`,
            }}
            x={0}
            y={0}
            onPointerDown={(e) => {
              e.stopPropagation();
              onResizeHandlePointerDown(Side.Bottom + Side.Left, bounds);
            }}
          />
          <rect
            className="fill-white stroke-blue-500 stroke-1"
            style={{
              cursor: 'ew-resize',
              width: `${HANDLE_WIDTH}px`,
              height: `${HANDLE_WIDTH}px`,
              transform: `translate(${bounds.x - HANDLE_WIDTH / 2}px, ${
                bounds.y + bounds.height / 2 - HANDLE_WIDTH / 2
              }px)`,
            }}
            x={0}
            y={0}
            onPointerDown={(e) => {
              e.stopPropagation();
              onResizeHandlePointerDown(Side.Left, bounds);
            }}
          />
        </>
      )}
    </>
  );
});

SelectionBox.displayName = 'SelectionBox';
