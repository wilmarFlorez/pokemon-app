'use client';

import { useGetPokemonsByType } from '@pokemon/pages/pokemon-detail/hooks/useGetPokemonsByType';
import { PokemonCard } from '../pokemon-card/pokemon-card';
import { PokemonsGrid } from '../pokemons-grid/pokemons-grid';

export const FilteredPokemonList = () => {
  const { data: pokemons, isError, isLoading } = useGetPokemonsByType();

  if (!pokemons || isError || isLoading)
    return (
      <div>
        {!pokemons && !isLoading ? (
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
    <PokemonsGrid>
      {pokemons.map((pokemon) => (
        <PokemonCard pokemon={pokemon} key={pokemon.id} />
      ))}
    </PokemonsGrid>
  );
};
