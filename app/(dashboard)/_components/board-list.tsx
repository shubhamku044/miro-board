import { EmptyBoard, EmptyFavorite, EmptySearch } from '.';

interface IProps {
  orgId: string;
  query: {
    search?: string;
    favorites?: string;
  };
}
const BoardList = ({ orgId, query }: IProps) => {
  const data = [];
  if (!data?.length && query.search) return <EmptySearch />;

  if (!data?.length && query.favorites) return <EmptyFavorite />;

  if (!data?.length) return <EmptyBoard />;

  return <div>Board list compo {JSON.stringify(query)}</div>;
};

export default BoardList;
