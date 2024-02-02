"use client";

import { useOrganizationList } from "@clerk/nextjs";
import { Item } from "./item";

export const List = () => {
  const { userMemberships } = useOrganizationList({
    userMemberships: {
      infinite: true,
    },
  });

  if (!userMemberships.data?.length) return;
  return (
    <ul className="space-y-4">
      {userMemberships.data?.map((member) => {
        return (
          <Item
            key={member.organization.id}
            id={member.organization.id}
            name={member.organization.name}
            imageUrl={member.organization.imageUrl}
          />
        );
      })}
    </ul>
  );
};
