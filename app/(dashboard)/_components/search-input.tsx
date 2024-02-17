'use client';
import qs from 'query-string';
import { Search } from 'lucide-react';
import { useDebounce } from 'usehooks-ts';
import { useEffect, useState, ChangeEvent } from 'react';
import { Input } from '@/components/ui/input';
import { useRouter } from 'next/navigation';

const SearchInput = () => {
  const router = useRouter();
  const [value, setValue] = useState<string>('');
  const debounceValue = useDebounce(value, 500);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    const url = qs.stringifyUrl(
      {
        url: '/',
        query: {
          search: debounceValue,
        },
      },
      { skipEmptyString: true, skipNull: true }
    );
    router.push(url);
  }, [debounceValue, router]);

  return (
    <div className="relative w-full">
      <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
      <Input
        onChange={handleChange}
        placeholder="Search boards"
        className="w-full max-w-lg pl-9"
        value={value}
      />
    </div>
  );
};

export default SearchInput;
