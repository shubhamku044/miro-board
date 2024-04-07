export const Participants = () => {
  return (
    <div className="absolute right-2 top-2 flex h-12 items-center rounded-md bg-white px-1.5 shadow-md">
      Participants
    </div>
  );
};

Participants.Skeleton = function ParticipantsSkeleton() {
  return (
    <div className="absolute right-2 top-2 flex h-12 w-[100px] items-center rounded-md bg-white px-1.5 shadow-md" />
  );
};
