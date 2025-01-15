import { PokemonSlim } from '@pokemon/types/pokemons';
import Link from 'next/link';

interface Props {
  pokemon: PokemonSlim;
}

export const PokemonCard = ({ pokemon }: Props) => {
  return (
    <Link href={`/pokemon/${pokemon.id}`} key={pokemon.id}>
      <div className=" bg-blue-500 border-4 border-white overflow-hidden h-36 justify-center items-center rounded-3xl shadow-md hover:shadow-xl hover:shadow-gray-300 transition-shadow  hover:animate-pokeballBounce">
        <div className="w-full h-full flex items-center justify-center">
          <span className="font-bold text-lg text-white">
            {pokemon.name.toUpperCase()}
          </span>
        </div>
      </div>
    </Link>
  );
};
