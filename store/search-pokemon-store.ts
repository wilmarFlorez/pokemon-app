import { create } from 'zustand';

interface SearchStore {
  filterType?: string;
  actions: {
    setFilterType: (filterType: string) => void;
  };
}

export const useSearchPokemonStore = create<SearchStore>((set) => ({
  filterType: '',
  actions: {
    setFilterType: (filterType) => set({ filterType }),
  },
}));

// selectors
export const useFilterType = () =>
  useSearchPokemonStore((state) => state.filterType);

// actions
export const useSetFilterType = () =>
  useSearchPokemonStore((state) => state.actions.setFilterType);
