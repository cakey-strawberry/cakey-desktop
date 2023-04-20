import { useState } from 'react';
import Image from 'next/image';
import TextField from '@mui/material/TextField';

import SearchIcon from '@/common/assets/icons/search.svg';

import type { ChangeEvent, FormEvent } from 'react';

type SearchProps = {
  placeholder?: string;
  onSearch: (searchValue: string) => void;
};

export default function Search({ placeholder, onSearch }: SearchProps) {
  const [searchValue, setSearchValue] = useState('');

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    setSearchValue(event.target.value);
  }

  function handleFormSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onSearch(searchValue);
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <TextField
        sx={{ width: '25.7rem', height: '4rem', borderRadius: '28px' }}
        InputProps={{
          endAdornment: <Image src={SearchIcon} alt="search" />,
          style: { borderRadius: '28px', padding: '0 8px' },
        }}
        type="text"
        placeholder={placeholder}
        value={searchValue}
        onChange={handleInputChange}
      />
    </form>
  );
}
