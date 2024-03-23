'use client';

import {
  Dialog,
  DialogClose,
  DialogTitle,
  DialogFooter,
  DialogDescription,
  DialogContent,
  DialogHeader,
} from '@/components/ui/dialog';
import { useRenameModal } from '@/store/use-rename-modal';
import { FormEventHandler, useEffect, useState } from 'react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { useApiMutation } from '@/hooks/use-api-mutation';
import { api } from '@/convex/_generated/api';
import { toast } from 'sonner';

export const RenameModal = () => {
  const { isOpen, initialValues, onClose } = useRenameModal((state) => state);
  const [title, setTitle] = useState<string>(initialValues.title);
  const { pending, mutate } = useApiMutation(api.board.update);

  useEffect(() => {
    setTitle(initialValues.title);
  }, [initialValues.title]);

  const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    mutate({ id: initialValues.id, title })
      .then(() => {
        toast.success('Board renamed successfully');
        onClose();
      })
      .catch(() => {
        toast.error('Failed to rename board');
      });
  };
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Rename board</DialogTitle>
        </DialogHeader>
        <DialogDescription>Rename the board to a new title.</DialogDescription>
        <form className="space-y-4" onSubmit={onSubmit}>
          <Input
            disabled={pending}
            value={title}
            required={true}
            maxLength={50}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter new title"
          />
          <DialogFooter>
            <DialogClose asChild onClick={onClose}>
              <Button type="button" variant="outline">
                Cancel
              </Button>
            </DialogClose>
            <Button disabled={pending} type="submit">
              Rename
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
