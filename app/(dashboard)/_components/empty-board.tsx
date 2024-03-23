'use client';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { api } from '@/convex/_generated/api';
import { useOrganization } from '@clerk/nextjs';
import { useApiMutation } from '@/hooks/use-api-mutation';
import { toast } from 'sonner';

const EmptyBoard = () => {
  const router = useRouter();
  const { organization } = useOrganization();
  const { mutate, pending } = useApiMutation(api.board.create);

  const onClick = () => {
    if (!organization) return;
    mutate({
      orgId: organization.id,
      title: 'New board',
    })
      .then((id) => {
        toast.success('Board created successfully');
        router.push(`/board/${id}`);
      })
      .catch(() => {
        console.error('Failed to create board');
        toast.error('Failed to create board');
      });
  };
  return (
    <div className="flex h-full flex-col items-center justify-center">
      <Image src="/note.svg" height={110} width={110} alt="Empty" />
      <h2 className="mt-6 text-2xl font-semibold">Create your first board!</h2>
      <p className="mt-2 text-sm text-muted-foreground">
        Start by creating a board for your organization
      </p>
      <div className="mt-6">
        <Button disabled={pending} onClick={onClick} size="lg">
          Create board
        </Button>
      </div>
    </div>
  );
};
export default EmptyBoard;
