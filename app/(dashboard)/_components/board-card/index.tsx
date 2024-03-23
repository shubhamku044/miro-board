'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Overlay } from './overlay';
import { useAuth } from '@clerk/nextjs';
import { formatDistanceToNow } from 'date-fns';
import { Footer } from './footer';
import { Skeleton } from '@/components/ui/skeleton';

interface IProps {
  id: string;
  title: string;
  imageUrl: string;
  authorName: string;
  authorId: string;
  orgId: string;
  createdAt: number;
  isFavorite: boolean;
}

export const BoardCard = ({
  id,
  title,
  imageUrl,
  authorName,
  authorId,
  orgId,
  createdAt,
  isFavorite,
}: IProps): JSX.Element => {
  const { userId } = useAuth();
  const authorLabel = userId === authorId ? 'You' : authorName;
  const createdAtLabel = formatDistanceToNow(createdAt, {
    addSuffix: true,
  });
  return (
    <Link href={`/board/${id}`}>
      <div className="group flex aspect-[100/127] flex-col justify-between overflow-hidden rounded-lg border">
        <div className="relative flex-1 bg-amber-50">
          <Image src={imageUrl} fill alt={title} className="" />
          <Overlay />
        </div>
        <Footer
          isFavorite={isFavorite}
          title={title}
          authorLabel={authorLabel}
          createdAtLabel={createdAtLabel}
          onClick={() => { }}
          disabled={false}
        />
      </div>
    </Link>
  );
};

BoardCard.Skeleton = function BoardCardSkeleton() {
  return (
    <div className="aspect-[100/127] overflow-hidden rounded-lg">
      <Skeleton className="size-full" />
    </div>
  );
};
