'use client';

import { api } from '@/convex/_generated/api';
import { Id } from '@/convex/_generated/dataModel';
import { useQuery } from 'convex/react';
import Image from 'next/image';
import { Poppins } from 'next/font/google';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Hint } from '@/components/hint';
import { useRenameModal } from '@/store/use-rename-modal';
import { Actions } from '@/components/actions';
import { Menu } from 'lucide-react';

interface IPropsInfoBoard {
  boardId: string;
}

const font = Poppins({ weight: ['500', '600'], subsets: ['latin'] });

const TabSeparator = () => {
  return <div className="px-1.5 text-neutral-400">|</div>;
};

export const Info = ({ boardId }: IPropsInfoBoard) => {
  const data = useQuery(api.board.get, {
    id: boardId as Id<'boards'>,
  });
  const { onOpen } = useRenameModal();

  if (!data) {
    return <InfoSkeleton />;
  }

  return (
    <div className="absolute left-2 top-2 flex h-12 items-center rounded-md bg-white px-1.5 shadow-md">
      <Hint label="Go to board" sideOffset={10}>
        <Button asChild variant="board" className="px-2">
          <Link href="/">
            <Image
              src={'/logo.svg'}
              alt="Miro board"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span
              className={cn(
                'ml-2 text-xl text-black font-semibold',
                font.className
              )}
            >
              Board
            </span>
          </Link>
        </Button>
      </Hint>
      <TabSeparator />
      <Hint label="Rename board" sideOffset={10}>
        <Button
          onClick={() => {
            onOpen(data._id, data.title);
          }}
          variant="board"
          className="px-2 text-base font-normal"
        >
          {data.title}
        </Button>
      </Hint>
      <TabSeparator />
      <Actions id={data._id} title={data.title} sideOffset={10} side="bottom">
        <div>
          <Hint label="">
            <Button size="icon" variant="board">
              <Menu />
            </Button>
          </Hint>
        </div>
      </Actions>
    </div>
  );
};

export function InfoSkeleton() {
  return (
    <div className="absolute left-2 top-2 flex h-12 w-[300px] items-center rounded-md bg-white shadow-md" />
  );
}
