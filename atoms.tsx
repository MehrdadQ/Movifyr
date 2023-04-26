import { atom } from 'recoil';

type Movie = {
  title: string;
  description: string;
  rating: number;
  year: number;
};

export const watchedMoviesState = atom<string[]>({
  key: 'watchedMovies',
  default: [],
});

export const recNumberState = atom<number>({
  key: 'recNumber',
  default: 1,
});

export const recommendationsState = atom<Movie[]>({
  key: 'recommendations',
  default: [],
});

export const loadingState = atom<boolean>({
  key: 'isLoading',
  default: false,
});

export const errorState = atom<string[]>({
  key: 'errors',
  default: [],
});