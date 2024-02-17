'use client';
import { useOrganization } from '@clerk/nextjs';
import { BoardList, EmptyOrg } from './_components';

interface IProps {
  searchParams: {
    search?: string;
    favorites?: string;
  };
}

const DashboardPage = ({ searchParams }: IProps) => {
  const { organization } = useOrganization();
  return (
    <div className="h-[calc(100%-5rem)] flex-1 p-6">
      {!organization ? (
        <EmptyOrg />
      ) : (
        <BoardList orgId={organization.id} query={searchParams} />
      )}
    </div>
  );
};

export default DashboardPage;
