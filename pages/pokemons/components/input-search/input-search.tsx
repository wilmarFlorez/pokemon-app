'use client';

import { ChangeEvent } from 'react';
import Image from 'next/image';
import {
  useFilterType,
  useSetTerm,
  useTerm,
} from '@pokemon/store/search-pokemon-store';
import { filters } from '@pokemon/constants/filter';

interface Props {
  disabledButton: boolean;
}

export const InputSearch = ({ disabledButton }: Props) => {
  const setTerm = useSetTerm();
  const term = useTerm();
  const filterType = useFilterType();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTerm(e.target.value.trim());
  };

  const handleClick = () => {
    console.log('Clicked');
  };

  return (
    <div className="flex rounded-lg overflow-hidden border border-gray-300">
      <input
        className="outline-none px-3 py-3 w-96 rounded-lg"
        type="search"
        placeholder="Buscar"
        disabled={filterType === filters.all}
        onChange={handleChange}
      />
      <button
        disabled={!term}
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
