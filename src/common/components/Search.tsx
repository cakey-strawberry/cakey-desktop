import { useState } from 'react';

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
      <input
        type="text"
        placeholder={placeholder}
        value={searchValue}
        onChange={handleInputChange}
      />

      <button type="submit">Submit</button>
    </form>
  );
}
