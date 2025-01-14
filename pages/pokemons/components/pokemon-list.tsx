'use client';

import { PokemonSlim } from '@pokemon/types/pokemons';
import { useInfinitePokemons } from '../hooks/useInfinitePokemons';

export const PokemonList = () => {
  const { data, isLoading, hasNextPage, fetchNextPage } = useInfinitePokemons();

  const loadMorePokemons = () => {
    if (hasNextPage) fetchNextPage();
  };

  return (
    <div>
      {data?.pages
        .flatMap((page) => page.results)
        .map((pokemon: PokemonSlim) => (
          <div key={pokemon.name}>{pokemon.name}</div>
        ))}

      <div>
        <button
          onClick={loadMorePokemons}
          className="bg-black text-white p-2 rounded-lg"
        >
          Load more
        </button>
      </div>
    </div>
  );
};
