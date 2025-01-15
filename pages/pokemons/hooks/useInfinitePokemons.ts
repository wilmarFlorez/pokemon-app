import { getPaginatedPokemonsOptions } from '@pokemon/services/pokemons/getAllPokemons';
import { PokemonsResponseApi } from '@pokemon/types/pokemons';
import { useInfiniteQuery } from '@tanstack/react-query';

export function useInfinitePokemons() {
  const {
    data,
    isLoading,
    hasNextPage,
    fetchNextPage,
    isError,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery<PokemonsResponseApi>(getPaginatedPokemonsOptions());

  return {
    data,
    isLoading,
    hasNextPage,
    fetchNextPage,
    isError,
    isFetchingNextPage,
    status,
  };
}
