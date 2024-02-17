"use client";

import { Plus } from "lucide-react";
import { CreateOrganization } from "@clerk/nextjs";

import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import { Hint } from "@/components/hint";

export const NewButton = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="aspect-square">
          <Hint side="right" align="center" label="Create Oraganization">
            <button className="flex size-full items-center justify-center rounded-md bg-white/25 opacity-60 transition hover:opacity-100">
              <Plus className="text-white" />
            </button>
          </Hint>
        </div>
      </DialogTrigger>
      <DialogContent className="max-w-md border-none bg-transparent p-0">
        <CreateOrganization />
      </DialogContent>
    </Dialog>
  );
};
