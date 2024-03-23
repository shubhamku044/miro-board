'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Overlay } from './overlay';
import { useAuth } from '@clerk/nextjs';
import { formatDistanceToNow } from 'date-fns';
import { Footer } from './footer';
import { Skeleton } from '@/components/ui/skeleton';
import { Actions } from '@/components/actions';
import { MoreHorizontal } from 'lucide-react';

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
          <Actions id={id} title={title} side="left">
            <button className="absolute right-1 top-1 px-3 py-2 opacity-0 outline-none transition-opacity group-hover:opacity-100">
              <MoreHorizontal className="size-5 text-white opacity-80 transition-opacity hover:opacity-100" />
            </button>
          </Actions>
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
