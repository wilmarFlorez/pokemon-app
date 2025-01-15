import { useInfinitePokemons } from '@pokemon/pages/pokemons/hooks/useInfinitePokemons';
import { getPaginatedPokemonsOptions } from '@pokemon/services/pokemons/getAllPokemons';
import { mockListPokemons } from '@pokemon/test-utils/mock-list-pokemons';
import { PokemonsResponseApi } from '@pokemon/types/pokemons';
import { useInfiniteQuery } from '@tanstack/react-query';
import { renderHook } from '@testing-library/react';

jest.mock('@tanstack/react-query', () => ({
  useInfiniteQuery: jest.fn(),
}));

jest.mock('@pokemon/services/pokemons/getAllPokemons', () => ({
  getPaginatedPokemonsOptions: jest.fn(),
}));

describe('useInfinitePokemons', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should return loading state initially', () => {
    (useInfiniteQuery as jest.Mock).mockReturnValue({
      data: undefined,
      fetchNextPage: jest.fn(),
      hasNextPage: false,
      isFetchingNextPage: false,
      status: 'loading',
      isLoading: true,
    });

    const { result } = renderHook(() => useInfinitePokemons());

    expect(result.current.isLoading).toBe(true);
  });

  it('should return data when the query is successful', () => {
    const mockData: PokemonsResponseApi = {
      count: 2,
      next: null,
      previous: null,
      results: [mockListPokemons.results[0]],
    };

    (useInfiniteQuery as jest.Mock).mockReturnValue({
      data: { pages: [mockData] },
      fetchNextPage: jest.fn(),
      hasNextPage: false,
      isFetchingNextPage: false,
      status: 'success',
      isLoading: false,
    });

    const { result } = renderHook(() => useInfinitePokemons());

    expect(result.current.isLoading).toBe(false);
    expect(result.current.data?.pages[0].results).toHaveLength(1);
    expect(result.current.data?.pages[0].results[0].name).toBe('bulbasaur');
  });

  it('should handle errors correctly', () => {
    (useInfiniteQuery as jest.Mock).mockReturnValue({
      data: undefined,
      fetchNextPage: jest.fn(),
      hasNextPage: false,
      isFetchingNextPage: false,
      status: 'error',
      isLoading: false,
    });

    const { result } = renderHook(() => useInfinitePokemons());

    expect(result.current.isLoading).toBe(false);
    expect(result.current.status).toBe('error');
  });

  it('should fetch the next page when fetchNextPage is called', () => {
    const mockFetchNextPage = jest.fn();

    (useInfiniteQuery as jest.Mock).mockReturnValue({
      data: undefined,
      fetchNextPage: mockFetchNextPage,
      hasNextPage: true,
      isFetchingNextPage: false,
      status: 'success',
      isLoading: false,
    });

    const { result } = renderHook(() => useInfinitePokemons());

    result.current.fetchNextPage();

    expect(mockFetchNextPage).toHaveBeenCalled();
  });

  it('should call optionsGetAllPokemons with correct filters', () => {
    renderHook(() => useInfinitePokemons());

    expect(getPaginatedPokemonsOptions).toHaveBeenCalledWith();
  });
});
