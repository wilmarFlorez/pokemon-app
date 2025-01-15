export type FilterType = 'all' | 'type';

type FilterOption = {
  label: string;
  value: FilterType;
  selected: boolean;
};

export type FilterOptions = FilterOption[];
