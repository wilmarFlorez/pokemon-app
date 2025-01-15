'use client';

import { RadioButton } from '@pokemon/components/radio-button/radio-button';
import { filterOptions } from '@pokemon/constants/filter';
import {
  useFilterType,
  useSetFilterType,
} from '@pokemon/store/search-pokemon-store';
import { FilterType } from '@pokemon/types/filter';
import { ChangeEvent } from 'react';

export const Filter = () => {
  const setFilterType = useSetFilterType();
  const filterType = useFilterType();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value as FilterType;
    setFilterType(value);
  };

  return (
    <div className="flex gap-3">
      {filterOptions.map((option) => (
        <RadioButton
          key={option.value}
          label={option.label}
          value={option.value}
          onChange={handleChange}
          checked={option.value === filterType}
        />
      ))}
    </div>
  );
};
