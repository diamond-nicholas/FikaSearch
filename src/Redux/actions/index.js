import * as actions from './actionTypes';

export const movieLists = (movie) => ({
  type: actions.MOVIE_LIST,
  payload: movie,
});

export const genreList = (genre) => ({
  type: actions.GENRES,
  payload: genre,
});

export const searchList = (search) => ({
  type: actions.SEARCH,
  payload: search,
});
