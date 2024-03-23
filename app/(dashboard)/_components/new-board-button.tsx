'use client';

import { api } from '@/convex/_generated/api';
import { useApiMutation } from '@/hooks/use-api-mutation';
import { cn } from '@/lib/utils';
import { Plus } from 'lucide-react';
import { toast } from 'sonner';

interface IProps {
  orgId: string;
  disabled: boolean;
}

export const NewBoardButton = ({ orgId, disabled }: IProps) => {
  const { pending, mutate } = useApiMutation(api.board.create);
  return (
    <button
      disabled={pending || disabled}
      className={cn(
        'col-span-1 aspect-[100/127] bg-blue-600 rounded-lg hover:bg-blue-800 flex flex-col items-center justify-center py-6',
        (disabled || pending) &&
        'cursor-not-allowed hover:bg-blue-600 opacity-75'
      )}
      onClick={() => {
        mutate({
          orgId,
          title: 'New board',
        })
          .then((id) => {
            toast.success('Board created successfully');
          })
          .catch(() => {
            console.error('Failed to create board');
            toast.error('Failed to create board');
          });
      }}
    >
      <div />
      <Plus className="size-10 stroke-1 text-white" />
      <p className="text-sm font-light text-white">New Board</p>
    </button>
  );
};
