'use client';
import { useOthersConnectionIds } from '@/liveblocks.config';
import React, { memo } from 'react';
import { Cursor } from './cursor';

const Cursors = () => {
  const ids = useOthersConnectionIds();

  return (
    <>
      {ids.map((connectionId) => {
        return <Cursor key={connectionId} connectionId={connectionId} />;
      })}
    </>
  );
};

export const CursorPresence = memo(() => {
  return (
    <>
      <Cursors />
    </>
  );
});

CursorPresence.displayName = 'CursorPresence';
