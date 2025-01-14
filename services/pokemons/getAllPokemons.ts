import { PokemonsResponseApi } from '@pokemon/types/pokemons';
import { infiniteQueryOptions } from '@tanstack/react-query';

const buildPokemonUrl = (offset = 0, limit = 20) => {
  return `${process.env.NEXT_PUBLIC_BASE_POKE_API}/pokemon?offset=${offset}&limit=${limit}`;
};

const getPaginatedPokemos = async (
  nextPage: string
): Promise<PokemonsResponseApi> => {
  try {
    const response = await fetch(nextPage);

    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }

    return response.json();
  } catch (error) {
    return {
      count: 0,
      next: null,
      previous: null,
      results: [],
    };
  }
};

export const getPaginatedPokemonsOptions = () => {
  return infiniteQueryOptions<PokemonsResponseApi>({
    queryKey: ['getAllPokemons'],
    queryFn: ({ pageParam }) => getPaginatedPokemos(pageParam),
    getNextPageParam: (lastPage) => {
      console.log('last page ==>', lastPage.next);
      return lastPage.next;
    },
    initialPageParam: buildPokemonUrl(),
  });
};
