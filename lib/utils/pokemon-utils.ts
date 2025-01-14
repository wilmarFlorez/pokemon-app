export const extractPokemonId = (url: string) => {
  const match = url.match(/\/(\d+)\/$/);
  return match ? match[1] : null;
};

export const buildPokemonUrl = (offset = 0, limit = 20) => {
  return `${process.env.NEXT_PUBLIC_BASE_POKE_API}/pokemon?offset=${offset}&limit=${limit}`;
};
