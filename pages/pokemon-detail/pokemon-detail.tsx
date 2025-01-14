import { getPokemonById } from '@pokemon/services/pokemons/getPokemonById';
import { PokemonItem } from './components/pokemon-item/pokemon-item';

interface Props {
  params: Promise<{ id: string }>;
}

export default async function Pokemon({ params }: Props) {
  const id = (await params).id;
  const pokemon = await getPokemonById({ id });

  return <PokemonItem pokemon={pokemon} />;
}
