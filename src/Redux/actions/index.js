import * as actions from './actionTypes';

export const movieLists = (movie) => ({
  type: actions.MOVIE_LIST,
  payload: movie,
});

export const genreList = (genre) => ({
  type: actions.GENRES,
  payload: genre,
});
