import { PokemonResponseApi } from '@pokemon/types/pokemon';
import { notFound } from 'next/navigation';

interface Props {
  pokemon: PokemonResponseApi;
}

export const PokemonItem = ({ pokemon }: Props) => {
  if (!pokemon) return notFound();

  return (
    <div>
      {pokemon.name} {pokemon.height}
    </div>
  );
};
