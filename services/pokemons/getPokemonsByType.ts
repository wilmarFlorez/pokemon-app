import { extractPokemonId } from '@pokemon/lib/utils/pokemon-utils';
import {
  PokemonResponseItem,
  PokemonsTypeResponseApi,
} from '@pokemon/types/pokemons';
import { queryOptions } from '@tanstack/react-query';

export const getPokemonsByType = async ({
  term,
}: {
  term?: string;
}): Promise<PokemonsTypeResponseApi | null> => {
  if (!term) return null;

  const BASE_POKE_API = process.env.NEXT_PUBLIC_BASE_POKE_API;
  const url = `${BASE_POKE_API}/type/${term}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Failed to fetch data from ${url}`);
    }

    const data = await response.json();
    const pokemons: PokemonResponseItem[] = data.pokemon;

    console.log('Pokemons', pokemons[0]);

    const newPokemons = pokemons.map((item) => {
      const id = extractPokemonId(item.pokemon.url);

      const newPokemon = {
        ...item.pokemon,
        id,
      };

      return newPokemon;
    });

    console.log('New pokemons', newPokemons);

    return newPokemons;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getPokemonsByTypeOptions = ({ term }: { term?: string }) => {
  return queryOptions<PokemonsTypeResponseApi | null>({
    queryKey: ['getPokemonsByType', { term }],
    queryFn: () => getPokemonsByType({ term }),
  });
};
