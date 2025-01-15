'use client';

import { ChangeEvent } from 'react';
import Image from 'next/image';

interface Props {
  disabledButton: boolean;
}

export const InputSearch = ({ disabledButton }: Props) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {};
  return (
    <div className="flex rounded-lg overflow-hidden border border-gray-300">
      <input
        className="outline-none px-3 py-3 w-96 rounded-lg"
        type="search"
        placeholder="Buscar"
        /* disabled={disabled} */
        onChange={handleChange}
      />
      <button
        disabled={disabledButton}
        className="bg-gray-200 hover:bg-gray-300 transition-colors h-full aspect-square flex justify-center items-center border-l border-l-gray-300"
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
