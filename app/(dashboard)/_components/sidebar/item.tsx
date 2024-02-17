"use client";

import { Hint } from "@/components/hint";
import { cn } from "@/lib/utils";
import { useOrganization, useOrganizationList } from "@clerk/nextjs";
import Image from "next/image";

interface IProps {
  id: string;
  name: string;
  imageUrl: string;
}

export const Item = ({ id, name, imageUrl }: IProps) => {
  const { organization } = useOrganization();
  const { setActive } = useOrganizationList();

  const isActive = organization?.id === id;
  const onClick = () => {
    if (!setActive) return;
    setActive({ organization: id });
  };
  return (
    <li className="relative aspect-square">
      <Hint label={name} side="right" align="center">
        <Image
          alt={name}
          fill
          src={imageUrl}
          onClick={onClick}
          className={cn(
            "rounded-md cursor-pointer opacity-75 hover:opacity-100 transition",
            isActive && "opacity-100",
          )}
        />
      </Hint>
    </li>
  );
};
