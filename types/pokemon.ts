type Sprites = {
  front_default: string;
  back_default: string;
};

export type PokemonResponseApi = {
  name: string;
  height: number;
  id: number;
  sprites: Sprites;
  weight: number;
  base_experience: number;
} | null;
