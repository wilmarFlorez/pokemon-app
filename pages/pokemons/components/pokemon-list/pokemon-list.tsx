'use client';

import { useFilterType } from '@pokemon/store/search-pokemon-store';
import { AllPokemonList } from '../all-pokemons/all-pokemons-list';
import { filters } from '@pokemon/constants/filter';
import { FilteredPokemonList } from '../filtered-pokemon-list/filtered-pokemon-list';

export const PokemonList = () => {
  const filterType = useFilterType();

  return (
    <>
      {filterType === filters.type ? (
        <FilteredPokemonList />
      ) : (
        <AllPokemonList />
      )}
    </>
  );
};
