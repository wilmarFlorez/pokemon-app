import { getQueryClient } from '@pokemon/lib/query-client';
import { getPaginatedPokemonsOptions } from '@pokemon/services/pokemons/getAllPokemons';
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import { PokemonList } from './components/pokemon-list';

export default async function Home() {
  const queryClient = getQueryClient();
  await queryClient.prefetchInfiniteQuery(getPaginatedPokemonsOptions());
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <PokemonList />
    </HydrationBoundary>
  );
}
