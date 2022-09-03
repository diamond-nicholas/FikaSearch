import movieReducer from './movie';
import genreReducer from './genre';

import { combineReducers } from 'redux';

const allReducers = combineReducers({
  movie: movieReducer,
  genre: genreReducer,
});

export default allReducers;
