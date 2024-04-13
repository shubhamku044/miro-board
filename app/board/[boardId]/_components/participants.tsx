'use client';

import { useOthers, useSelf } from '@/liveblocks.config';
import UserAvatar from './user-avatar';
import { connectionIdToColor } from '@/lib/utils';

const MAX_SHOW_USERS = 5;

export const Participants = () => {
  const users = useOthers();
  const currentUser = useSelf();
  const hasMoreUsers = users.length > MAX_SHOW_USERS;
  return (
    <div className="absolute right-2 top-2 flex h-12 items-center rounded-md bg-white px-1.5 shadow-md">
      <div className="flex gap-x-2">
        {users.slice(0, MAX_SHOW_USERS).map((user) => (
          <UserAvatar
            key={user.connectionId}
            src={user.info?.picture}
            name={user.info?.name}
            fallback={user.info?.name?.charAt(0) || 'T'}
            borderColor={connectionIdToColor(user.connectionId)}
          />
        ))}
        {currentUser && (
          <UserAvatar
            src={currentUser.info?.picture}
            name={`${currentUser.info?.name} You`}
            fallback={currentUser.info?.name?.charAt(0) || 'T'}
            borderColor={connectionIdToColor(currentUser.connectionId)}
          />
        )}
        {hasMoreUsers && (
          <UserAvatar
            name={`+${users.length - MAX_SHOW_USERS} more`}
            fallback={`+${users.length - MAX_SHOW_USERS}`}
          />
        )}
      </div>
    </div>
  );
};

export function ParticipantsSkeleton() {
  return (
    <div className="absolute right-2 top-2 flex h-12 w-[100px] items-center rounded-md bg-white px-1.5 shadow-md" />
  );
}
