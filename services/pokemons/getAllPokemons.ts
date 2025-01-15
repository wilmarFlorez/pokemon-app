import {
  buildPokemonUrl,
  extractPokemonId,
} from '@pokemon/lib/utils/pokemon-utils';
import { PokemonsResponseApi } from '@pokemon/types/pokemons';
import { infiniteQueryOptions } from '@tanstack/react-query';

const getPaginatedPokemos = async (
  nextPage: string
): Promise<PokemonsResponseApi> => {
  try {
    const response = await fetch(nextPage);

    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }

    const data: PokemonsResponseApi = await response.json();

    const newPokemons = data.results.map((pokemon) => {
      const id = extractPokemonId(pokemon.url);

      const newPokemon = {
        ...pokemon,
        id,
      };

      return newPokemon;
    });

    const newData: PokemonsResponseApi = {
      ...data,
      results: newPokemons,
    };

    return newData;
  } catch (error) {
    console.log(error);
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
    queryFn: ({ pageParam }) => getPaginatedPokemos(pageParam as string),
    getNextPageParam: (lastPage) => {
      return lastPage.next;
    },
    initialPageParam: buildPokemonUrl(),
  });
};
