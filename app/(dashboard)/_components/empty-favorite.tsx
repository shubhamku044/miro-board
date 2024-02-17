import Image from 'next/image';

const EmptyFavorite = () => {
  return (
    <div className="flex h-full flex-col items-center justify-center">
      <Image src="/empty-favorites.svg" height={140} width={140} alt="Empty" />
      <h2 className="mt-6 text-2xl font-semibold">No favorite boards!</h2>
      <p className="mt-2 text-sm text-muted-foreground">
        Try favoriting a board
      </p>
    </div>
  );
};
export default EmptyFavorite;
