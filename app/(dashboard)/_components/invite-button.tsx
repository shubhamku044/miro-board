import { Plus } from "lucide-react";
import { OrganizationProfile } from "@clerk/nextjs";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const InviteButton = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">
          <Plus className="mr-2 size-4" />
          Invite members
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl border-none bg-transparent p-0">
        <OrganizationProfile />
      </DialogContent>
    </Dialog>
  );
};

export default InviteButton;
