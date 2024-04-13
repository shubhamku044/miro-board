import { connectionIdToColor } from '@/lib/utils';
import { useOther } from '@/liveblocks.config';
import { MousePointer2 } from 'lucide-react';
import React, { memo } from 'react';

interface IProps {
  connectionId: number;
}

export const Cursor = memo(({ connectionId }: IProps) => {
  const info = useOther(connectionId, (user) => user.info);
  const cursor = useOther(connectionId, (user) => user.presence?.cursor);

  const name = info?.name || 'Teammate';

  if (!cursor) {
    return null;
  }

  const { x, y } = cursor;

  return (
    <foreignObject
      style={{
        transform: `translate(${x}px, ${y}px)`,
      }}
      height="50"
      width={name.length * 10 + 24}
      className="relative drop-shadow-md"
    >
      <MousePointer2
        className="size-5"
        style={{
          fill: connectionIdToColor(connectionId),
          color: connectionIdToColor(connectionId),
        }}
      />
      <div
        style={{
          backgroundColor: connectionIdToColor(connectionId),
        }}
        className="absolute left-5 rounded-md px-1 py-0.5 text-xs font-semibold text-white"
      >
        {name}
      </div>
    </foreignObject>
  );
});

Cursor.displayName = 'Cursor';
