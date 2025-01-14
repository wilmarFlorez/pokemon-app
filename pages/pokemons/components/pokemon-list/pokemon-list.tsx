'use client';

import { PokemonSlim } from '@pokemon/types/pokemons';
import { useInfinitePokemons } from '../../hooks/useInfinitePokemons';
import { PokemonCard } from '../pokemon-card/pokemon-card';

export const PokemonList = () => {
  const { data, isLoading, hasNextPage, fetchNextPage } = useInfinitePokemons();

  const loadMorePokemons = () => {
    if (hasNextPage) fetchNextPage();
  };

  return (
    <div className="pt-16 bg-slate-100">
      <section className="flex justify-center">
        <div className="container px-2 md:px-0 grid gap-8 md-gap-24 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {data?.pages
            .flatMap((page) => page.results)
            .map((pokemon: PokemonSlim) => (
              <PokemonCard pokemon={pokemon} key={pokemon.id} />
            ))}
        </div>
      </section>

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
