import { cn } from '@/lib/utils';
import { Star } from 'lucide-react';

interface IProps {
  title: string;
  authorLabel: string;
  createdAtLabel: string;
  isFavorite: boolean;
  onClick: () => void;
  disabled: boolean;
}

export const Footer = ({
  title,
  authorLabel,
  createdAtLabel,
  isFavorite,
  onClick,
  disabled,
}: IProps) => {
  return (
    <div className="relative bg-white p-3">
      <p className="max-w-[calc(100% - 20px)] truncate text-[14px]">{title}</p>
      <p className="truncate text-[11px] text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100">
        {authorLabel}, {createdAtLabel}
      </p>
      <button
        disabled={disabled}
        onClick={(e) => {
          e.stopPropagation();
          e.preventDefault();
          onClick();
        }}
        className={cn(
          'opacity-0 group-hover:opacity-100 text-muted-foreground hover:text-blue-300 transition absolute top-3 right-3',
          disabled && 'cursor-not-allowed opacity-75'
        )}
      >
        <Star
          className={cn(
            'h-4 w-4',
            isFavorite ? 'fill-blue-600' : 'text-blue-600'
          )}
        />
      </button>
    </div>
  );
};
