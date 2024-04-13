import { Hint } from '@/components/hint';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import React from 'react';

interface UserAvatarProps {
  src?: string;
  name?: string;
  fallback?: string;
  borderColor?: string;
}

const UserAvatar = ({ src, name, fallback, borderColor }: UserAvatarProps) => {
  return (
    <Hint side="bottom" sideOffset={10} label={name || 'Teammate'}>
      <Avatar
        style={{
          borderColor,
        }}
        className="size-8 border-2"
      >
        <AvatarImage src={src} alt={name || 'Teammate'} />
        <AvatarFallback className="text-xs font-semibold">
          {fallback || name?.charAt(0)}
        </AvatarFallback>
      </Avatar>
    </Hint>
  );
};

export default UserAvatar;
