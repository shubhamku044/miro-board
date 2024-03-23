'use client';
import { Link2, Trash2 } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from './ui/dropdown-menu';
import { DropdownMenuContentProps } from '@radix-ui/react-dropdown-menu';
import { toast } from 'sonner';
import { api } from '@/convex/_generated/api';
import { useApiMutation } from '@/hooks/use-api-mutation';
import ConfirmModal from './confirm-modal';
import { Button } from './ui/button';

interface IProps {
  children: React.ReactNode;
  side?: DropdownMenuContentProps['side'];
  sideOffset?: DropdownMenuContentProps['sideOffset'];
  id: string;
  title: string;
}

export const Actions = ({ children, side, sideOffset, id, title }: IProps) => {
  const { mutate, pending } = useApiMutation(api.board.remove);
  const onCopyLink = () => {
    navigator.clipboard
      .writeText(`${window.location.origin}/board/${id}`)
      .then(() => {
        toast.success('Board link copied to clipboard');
      })
      .catch(() => {
        toast.error('Failed to copy board link');
      });
  };

  const onDelete = () => {
    mutate({ id })
      .then(() => {
        toast.success('Board deleted successfully');
      })
      .catch(() => {
        toast.error('Failed to delete board');
      });
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
      <DropdownMenuContent
        onClick={(e) => e.stopPropagation()}
        side={side}
        sideOffset={sideOffset}
        className="w-60"
      >
        <DropdownMenuItem onClick={onCopyLink}>
          <Link2 className="mr-2 size-4" />
          Copy board link
        </DropdownMenuItem>
        <ConfirmModal
          header="Delete board"
          description={`Are you sure you want to delete the board "${title}"?`}
          onConfirm={onDelete}
          disabled={pending}
        >
          <Button
            variant="ghost"
            className="w-full cursor-pointer justify-start p-2 font-normal"
          >
            <Trash2 className="mr-2 size-4 text-red-500" />
            Delete
          </Button>
        </ConfirmModal>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
