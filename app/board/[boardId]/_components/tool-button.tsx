import { Hint } from '@/components/hint';
import { Button } from '@/components/ui/button';
import { LucideIcon } from 'lucide-react';
import React from 'react';

interface IPropsToolButton {
  onClick: () => void;
  icon: LucideIcon;
  label: string;
  isActive?: boolean;
  isDisabled?: boolean;
}

const ToolButton = ({
  onClick,
  icon: Icon,
  label,
  isActive,
  isDisabled,
}: IPropsToolButton) => {
  return (
    <Hint side="right" sideOffset={14} label={label}>
      <Button
        disabled={isDisabled}
        onClick={onClick}
        size="icon"
        variant={isActive ? 'boardActive' : 'board'}
      >
        <Icon />
      </Button>
    </Hint>
  );
};

export default ToolButton;
