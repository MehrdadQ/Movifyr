import { atom } from 'recoil';

type Movie = {
  title: string;
  description: string;
  rating: number;
  year: number;
};

export const promptState = atom<string>({
  key: 'prompt',
  default: '',
});

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