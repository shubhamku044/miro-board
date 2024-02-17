'use client';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { OrganizationSwitcher } from '@clerk/nextjs';
import { LayoutDashboard, Star } from 'lucide-react';
import { Poppins } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

const font = Poppins({
  subsets: ['latin'],
  weight: ['600'],
});

const OrganizationSidebar = () => {
  const searchParams = useSearchParams();
  const favorites = searchParams.get('favorites');
  return (
    <div className="hidden w-[206px] flex-col space-y-6 pl-5 pt-5 lg:flex">
      <Link href="/">
        <div className="flex items-center gap-x-2">
          <Image src={'/logo.svg'} alt="Logo" height={60} width={60} />
          <span className={cn('font-semibold text-2xl', font.className)}>
            Board
          </span>
        </div>
      </Link>
      <OrganizationSwitcher
        hidePersonal
        appearance={{
          elements: {
            rootBox: {
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
            },
            organizationSwitcherTrigger: {
              padding: '6px',
              width: '100%',
              borderRadius: '8px',
              border: '1px solid #e5e7eb',
              justifyContent: 'space-between',
              backgroundColor: 'white',
            },
          },
        }}
      />
      <div className="w-full space-y-1">
        <Button
          variant={favorites ? 'ghost' : 'secondary'}
          asChild
          size="lg"
          className="w-full justify-start px-2 font-normal"
        >
          <Link href="/">
            <LayoutDashboard className="mr-2 size-4" />
            <span>Team boards</span>
          </Link>
        </Button>
        <Button
          variant={!favorites ? 'ghost' : 'secondary'}
          asChild
          size="lg"
          className="w-full justify-start px-2 font-normal"
        >
          <Link
            href={{
              pathname: '/',
              query: {
                favorites: true,
              },
            }}
          >
            <Star className="mr-2 size-4" />
            <span>Favorite boards</span>
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default OrganizationSidebar;
