import * as actions from './actionTypes';

export const data = (sdks) => ({
  type: actions.INSTALLED_SDK,
  payload: sdks,
});

export const genreList = (genre) => ({
  type: actions.GENRES,
  payload: genre,
});
