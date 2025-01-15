'use client';

import { useEffect } from 'react';
import { useInfinitePokemons } from '../../hooks/useInfinitePokemons';
import { useIsVisible } from '@pokemon/hooks/useIntersectionObserver';
import { PokemonSlim } from '@pokemon/types/pokemons';
import { PokemonCard } from '../pokemon-card/pokemon-card';
import { PokemonsGrid } from '../pokemons-grid/pokemons-grid';

export const AllPokemonList = () => {
  const {
    data,
    isLoading,
    hasNextPage,
    fetchNextPage,
    isError,
    isFetchingNextPage,
  } = useInfinitePokemons();
  const { isIntersecting, ref } = useIsVisible();

  useEffect(() => {
    if (isIntersecting && hasNextPage) {
      fetchNextPage();
    }
  }, [isIntersecting, hasNextPage, fetchNextPage]);

  if (!data || isError || isLoading)
    return (
      <div>
        {!data && !isLoading ? (
          <p className="text-center mt-12 text-lg">
            No hemos encontrado resultados. Por favor, ingresa un término válido
            de búsqueda. Ejemplo: fire
          </p>
        ) : null}
        {isError ? (
          <p className="text-center mt-12 text-lg">
            Ah ocurrrido un error, intentalo mas tarde
          </p>
        ) : null}
        {isLoading ? (
          <p className="text-center mt-12 text-lg">Cargando...</p>
        ) : null}
      </div>
    );

  return (
    <div>
      <PokemonsGrid>
        {data?.pages
          .flatMap((page) => page.results)
          .map((pokemon: PokemonSlim) => (
            <PokemonCard pokemon={pokemon} key={pokemon.id} />
          ))}
        {hasNextPage ? <div ref={ref} className="my-8 h-2" /> : null}
      </PokemonsGrid>
      {isFetchingNextPage ? <p>Cargando...</p> : null}
    </div>
  );
};
