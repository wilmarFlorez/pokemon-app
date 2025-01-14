import { PokemonResponseApi } from '@pokemon/types/pokemon';

export const getPokemonById = async ({
  id,
}: {
  id: string;
}): Promise<PokemonResponseApi> => {
  const BASE_POKE_API = process.env.NEXT_PUBLIC_BASE_POKE_API;
  const url = `${BASE_POKE_API}/pokemon/${id}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Failed to fetch data from ${url}`);
    }

    return response.json();
  } catch (error) {
    return null;
  }
};
