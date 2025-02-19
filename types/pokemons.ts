export type PokemonSlim = {
  id: string | null;
  name: string;
  url: string;
};

export interface PokemonsResponseApi {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonSlim[];
}

export type PokemonsTypeResponseApi = PokemonSlim[];

export type PokemonResponseItem = {
  pokemon: PokemonSlim;
};
