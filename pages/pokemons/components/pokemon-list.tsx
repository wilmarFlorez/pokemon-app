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
    <div className="pt-16 bg-slate-100">
      <section className="flex justify-center">
        <div className="container px-2 md:px-0 grid gap-8 md-gap-24 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {data?.pages
            .flatMap((page) => page.results)
            .map((pokemon: PokemonSlim) => (
              <Link href={`/pokemon/${pokemon.id}`} key={pokemon.id}>
                <div className="flex flex-col relative bg-blue-500 border-4 border-white overflow-hidden  aspect-square justify-center items-center rounded-[40px] shadow-md hover:shadow-xl hover:shadow-gray-300 transition-shadow  hover:animate-pokeballBounce">
                  <div className="w-full h-full absolute flex items-center justify-center">
                    <span className="font-bold text-lg text-white mb-16 ">
                      {pokemon.name.toUpperCase()}
                    </span>
                  </div>
                </div>
              </Link>
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
