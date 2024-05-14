'use client';
import { useSelectionBounds } from '@/hooks/use-selection-bounds';
import { useMutation, useSelf } from '@/liveblocks.config';
import { Camera, Color } from '@/types/canvas';
import React, { memo } from 'react';
import { ColorPicker } from './color-picker';
import { useDeleteLayers } from '@/hooks/use-delete-layers';
import { Hint } from '@/components/hint';
import { Button } from '@/components/ui/button';
import { BringToFront, SendToBack, Trash2 } from 'lucide-react';

interface IProps {
  camera: Camera;
  setLastUsedColor: (color: Color) => void;
}

export const SelectionTools = memo(({ camera, setLastUsedColor }: IProps) => {
  const selection = useSelf((me) => me.presence.selection);

  const setFill = useMutation(
    ({ storage }, fill: Color) => {
      const liveLayers = storage.get('layers');
      setLastUsedColor(fill);

      selection.forEach((id) => {
        liveLayers.get(id)?.set('fill', fill);
      });
    },
    [selection, setLastUsedColor]
  );

  const deleteLayers = useDeleteLayers();

  const selectionBounds = useSelectionBounds();
  const moveToFront = useMutation(
    ({ storage }) => {
      const liveLayerIds = storage.get('layerIds');
      const indices: number[] = [];

      const arr = liveLayerIds.toArray();
      for (let i = 0; i < arr.length; i++) {
        if (selection.includes(arr[i])) {
          indices.push(i);
        }
      }

      for (let i = indices.length - 1; i >= 0; i--) {
        liveLayerIds.move(
          indices[i],
          arr.length - 1 - (indices.length - 1 - i)
        );
      }
    },
    [selection]
  );

  const moveToBack = useMutation(
    ({ storage }) => {
      const liveLayerIds = storage.get('layerIds');
      const indices: number[] = [];

      const arr = liveLayerIds.toArray();
      for (let i = 0; i < arr.length; i++) {
        if (selection.includes(arr[i])) {
          indices.push(i);
        }
      }

      for (let i = 0; i < indices.length; i++) {
        liveLayerIds.move(indices[i], i);
      }
    },
    [selection]
  );

  if (!selectionBounds) {
    return null;
  }

  const x = selectionBounds.width / 2 + selectionBounds.x + camera.x;
  const y = selectionBounds.y + camera.y;
  return (
    <div
      style={{
        transform: `translate(calc(${x}px - 50%), calc(${y - 16}px - 100%))`,
      }}
      className="absolute flex select-none rounded-xl border bg-white p-3 shadow-sm"
    >
      <ColorPicker onColorChange={setFill} />
      <div className="flex flex-col gap-y-0.5">
        <Hint label="Bring to front">
          <Button onClick={moveToFront} variant="board" size="icon">
            <BringToFront />
          </Button>
        </Hint>
        <Hint label="Send to back">
          <Button onClick={moveToBack} variant="board" size="icon">
            <SendToBack />
          </Button>
        </Hint>
      </div>
      <div className="ml-2 flex items-center border-l border-neutral-300 pl-2">
        <Hint label="Delete">
          <Button variant="board" size="icon" onClick={deleteLayers}>
            <Trash2 />
          </Button>
        </Hint>
      </div>
    </div>
  );
});

SelectionTools.displayName = 'SelectionTools';
