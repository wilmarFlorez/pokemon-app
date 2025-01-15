import { getPokemonsByTypeOptions } from '@pokemon/services/pokemons/getPokemonsByType';
import { useTerm } from '@pokemon/store/search-pokemon-store';
import { PokemonsTypeResponseApi } from '@pokemon/types/pokemons';
import { useQuery } from '@tanstack/react-query';

export function useGetPokemonsByType() {
  const term = useTerm();

  const { data, isLoading, isError } = useQuery<PokemonsTypeResponseApi | null>(
    getPokemonsByTypeOptions({ term })
  );

  return { data, isLoading, isError };
}
