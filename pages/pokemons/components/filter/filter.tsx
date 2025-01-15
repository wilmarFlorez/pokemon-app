'use client';

import { RadioButton } from '@pokemon/components/radio-button/radio-button';
import { filterOptions } from '@pokemon/constants/filter';
import { ChangeEvent, useState } from 'react';

export const Filter = () => {
  const [options, setOptions] = useState(filterOptions);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    const updatedOptions = options.map((option) => ({
      ...option,
      selected: option.value === value,
    }));

    setOptions(updatedOptions);
  };

  return (
    <div className="flex gap-3">
      {options.map((option) => (
        <RadioButton
          key={option.value}
          label={option.label}
          value={option.value}
          onChange={handleChange}
          checked={option.selected}
        />
      ))}
    </div>
  );
};
