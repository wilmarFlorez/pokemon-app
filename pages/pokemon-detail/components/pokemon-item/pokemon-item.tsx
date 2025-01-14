import { PokemonResponseApi } from '@pokemon/types/pokemon';
import Image from 'next/image';
import { notFound } from 'next/navigation';

interface Props {
  pokemon: PokemonResponseApi;
}

const DefinitionSection = ({
  name,
  value,
}: {
  name: string;
  value: string;
}) => {
  return (
    <div className="flex gap-2 md:mt-2">
      <dt className="font-bold text-white">{name}:</dt>
      <dd className="font-bold">{value}</dd>
    </div>
  );
};

export const PokemonItem = ({ pokemon }: Props) => {
  if (!pokemon) return notFound();

  return (
    <div className="bg-blue-500 rounded-3xl px-4 py-10 shadow-xl border-2 md:border-4 border-white shadow-gray-200 transition-shadow">
      <div className="flex flex-row justify-center items-center content-center gap-6 md:gap-8 lg:gap-10">
        <div className="flex flex-col gap-4 items-center">
          <div className="bg-white w-14 h-14 md:w-24 md:h-24 rounded-full">
            <Image
              src={pokemon.sprites.front_default}
              height={96}
              width={96}
              alt={pokemon.name}
            />
          </div>
          <h1 className="font-extrabold text-lg  md:text-2xl text-white">
            {pokemon.name.toUpperCase()}
          </h1>
        </div>
        <div className="border-l-4 pl-3 border-l-white flex pb-1">
          <dl>
            <DefinitionSection name="ID" value={String(pokemon.id)} />
            <DefinitionSection name="Altura" value={String(pokemon.height)} />
            <DefinitionSection name="Peso" value={String(pokemon.weight)} />
            <DefinitionSection
              name="Experiencia base"
              value={String(pokemon.base_experience)}
            />
          </dl>
        </div>
      </div>
    </div>
  );
};
