export type PokemonSlim = {
  name: string;
  url: string;
};

export interface PokemonsResponseApi {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonSlim[];
}
