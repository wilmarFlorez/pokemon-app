'use client';

import { useGetPokemonsByType } from '@pokemon/pages/pokemon-detail/hooks/useGetPokemonsByType';
import { PokemonCard } from '../pokemon-card/pokemon-card';

export const FilteredPokemonList = () => {
  const { data: pokemons, isError, isLoading } = useGetPokemonsByType();

  if (!pokemons || isError || isLoading)
    return (
      <div>
        {!pokemons && !isLoading ? (
          <p className="text-center mt-12 text-lg">
            No hemos encontrado resultados, ingresa un término de busqueda
            ejemplo: fire
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
    <div className="pt-32">
      <section className="flex justify-center">
        <div className="container px-2 md:px-0 grid gap-8 md-gap-24 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {pokemons.map((pokemon) => (
            <PokemonCard pokemon={pokemon} key={pokemon.id} />
          ))}
        </div>
      </section>
    </div>
  );
};
