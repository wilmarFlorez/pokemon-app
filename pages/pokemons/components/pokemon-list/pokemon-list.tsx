'use client';

import { PokemonSlim } from '@pokemon/types/pokemons';
import { useInfinitePokemons } from '../../hooks/useInfinitePokemons';
import { PokemonCard } from '../pokemon-card/pokemon-card';
import { useIsVisible } from '@pokemon/hooks/useIntersectionObserver';
import { useEffect } from 'react';

export const PokemonList = () => {
  const { data, isLoading, hasNextPage, fetchNextPage } = useInfinitePokemons();
  const { isIntersecting, ref } = useIsVisible();
  
  useEffect(() => {
    if (isIntersecting && hasNextPage) {
      fetchNextPage();
    }
  }, [isIntersecting, hasNextPage, fetchNextPage]);

  return (
    <div className="pt-32">
      <section className="flex justify-center">
        <div className="container px-2 md:px-0 grid gap-8 md-gap-24 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {data?.pages
            .flatMap((page) => page.results)
            .map((pokemon: PokemonSlim) => (
              <PokemonCard pokemon={pokemon} key={pokemon.id} />
            ))}
        </div>
      </section>

      {hasNextPage ? <div ref={ref} className="my-8 h-2" /> : null}
    </div>
  );
};
