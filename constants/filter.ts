import { FilterOptions } from '@pokemon/types/filter';

export const filters = { all: 'all', type: 'type' } as const;
export const filterOptions: FilterOptions = [
  {
    label: 'Todos',
    value: filters.all,
    selected: true,
  },
  {
    label: 'Tipo',
    value: filters.type,
    selected: false,
  },
];

