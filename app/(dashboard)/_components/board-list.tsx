'use client';
import { EmptyBoard, EmptyFavorite, EmptySearch } from '.';
import { useQuery } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { BoardCard } from './board-card';
import { NewBoardButton } from './new-board-button';

interface IProps {
  orgId: string;
  query: {
    search?: string;
    favorites?: string;
  };
}
const BoardList = ({ orgId, query }: IProps) => {
  const data = useQuery(api.boards.get, { orgId, ...query });

  if (data === undefined)
    return (
      <div>
        <h2 className="text-3xl">
          {query.favorites ? 'Favorite boards' : 'Team boards'}
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-5 pb-10 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
          <NewBoardButton disabled orgId={orgId} />
          {new Array(6).fill(null).map((_, i) => (
            <BoardCard.Skeleton key={i} />
          ))}
        </div>
      </div>
    );

  if (!data?.length && query.search) return <EmptySearch />;

  if (!data?.length && query.favorites) return <EmptyFavorite />;

  if (!data?.length) return <EmptyBoard />;

  return (
    <div>
      <h2 className="text-3xl">
        {query.favorites ? 'Favorite boards' : 'Team boards'}
      </h2>
      <div className="mt-8 grid grid-cols-1 gap-5 pb-10 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
        <NewBoardButton disabled={false} orgId={orgId} />
        {data?.map((board) => {
          return (
            <BoardCard
              key={board._id}
              id={board._id}
              title={board.title}
              imageUrl={board.imageUrl}
              authorName={board.authorName}
              authorId={board.authorId}
              orgId={board.orgId}
              createdAt={board._creationTime}
              isFavorite={board.isFavorite}
            />
          );
        })}
      </div>
    </div>
  );
};

export default BoardList;
