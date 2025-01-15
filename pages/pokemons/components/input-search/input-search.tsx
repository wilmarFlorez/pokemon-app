'use client';

import { ChangeEvent, useState } from 'react';
import Image from 'next/image';
import { useFilterType, useSetTerm } from '@pokemon/store/search-pokemon-store';
import { filters } from '@pokemon/constants/filter';

export const InputSearch = () => {
  const [localTerm, setLocalTerm] = useState('');
  const setTerm = useSetTerm();
  const filterType = useFilterType();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLocalTerm(e.target.value.trim());
  };

  const handleClick = () => {
    setTerm(localTerm.toLocaleLowerCase());
  };

  return (
    <div className="flex rounded-lg overflow-hidden border border-gray-300">
      <input
        className="outline-none px-3 py-3 w-96 rounded-lg"
        type="search"
        placeholder="Buscar"
        disabled={filterType === filters.all}
        onChange={handleChange}
        value={localTerm}
      />
      <button
        disabled={!localTerm}
        className="bg-gray-200 hover:bg-gray-300 transition-colors h-full aspect-square flex justify-center items-center border-l border-l-gray-300"
        onClick={handleClick}
      >
        <Image
          src="/icons/icon-search.svg"
          width={20}
          height={20}
          alt="search icon"
        />
      </button>
    </div>
  );
};
