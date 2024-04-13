import { Info } from './info';
import { Participants } from './participants';
import { ToolBar } from './tool-bar';

interface IProps {
  boardId: string;
}

export const Canvas = ({ boardId }: IProps) => {
  return (
    <main className="relative size-full touch-none bg-neutral-100">
      <Info boardId={boardId} />
      <Participants />
      <ToolBar />
    </main>
  );
};
