export const ToolBar = () => {
  return (
    <div className="absolute left-2 top-1/2 flex -translate-y-1/2 flex-col items-center gap-y-4 rounded-md bg-white px-1.5 shadow-md">
      <div className="flex flex-col items-center gap-y-1 rounded-md bg-white p-1.5 shadow-md">
        <div>Pencil</div>
        <div>Brush</div>
        <div>Eraser</div>
        <div>Fill</div>
      </div>
      <div className="flex flex-col items-center gap-y-1 rounded-md bg-white p-1.5 shadow-md">
        <div>undo</div>
        <div>redo</div>
      </div>
    </div>
  );
};

ToolBar.Skeleton = function ToolBarSkeleton() {
  return (
    <div className="absolute left-2 top-1/2 flex h-[360px] w-14 -translate-y-1/2 flex-col items-center gap-y-4 rounded-md bg-white px-1.5 shadow-md" />
  );
};
