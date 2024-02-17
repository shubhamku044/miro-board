import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { CreateOrganization } from '@clerk/nextjs';
import Image from 'next/image';

const EmptyOrg = () => {
  return (
    <div className="flex h-full flex-col items-center justify-center">
      <Image src="/elements.svg" alt="Illustration" height={200} width={200} />
      <h2 className="mt-6 text-2xl font-semibold">Welcome to Board</h2>
      <p className="mt-2 text-sm text-muted-foreground">
        Create an organization to get started
      </p>
      <div className="mt-6">
        <Dialog>
          <DialogTrigger asChild>
            <Button>Create organization</Button>
          </DialogTrigger>
          <DialogContent className="max-w-md border-none bg-transparent p-0 outline-none">
            <CreateOrganization />
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};
export default EmptyOrg;
