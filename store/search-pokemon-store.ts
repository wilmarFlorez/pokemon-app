import { FilterType } from '@pokemon/types/filter';
import { create } from 'zustand';

interface SearchStore {
  term?: string;
  filterType: FilterType;
  actions: {
    setTerm: (term: string) => void;
    setFilterType: (filterType: FilterType) => void;
  };
}

export const useSearchPokemonStore = create<SearchStore>((set) => ({
  term: undefined,
  filterType: 'all',
  actions: {
    setTerm: (term) => set({ term }),
    setFilterType: (filterType) => set({ filterType }),
  },
}));

// selectors
export const useTerm = () => useSearchPokemonStore((state) => state.term);
export const useFilterType = () =>
  useSearchPokemonStore((state) => state.filterType);

// actions
export const useSetTerm = () =>
  useSearchPokemonStore((state) => state.actions.setTerm);
export const useSetFilterType = () =>
  useSearchPokemonStore((state) => state.actions.setFilterType);
