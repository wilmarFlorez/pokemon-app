'use client';

import { PokemonSlim } from '@pokemon/types/pokemons';
import { useInfinitePokemons } from '../hooks/useInfinitePokemons';
import Link from 'next/link';

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
          <Link href={`/pokemon/${pokemon.id}`} key={pokemon.id}>
            <div>
              {pokemon.name} {pokemon.id}{' '}
            </div>
          </Link>
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
