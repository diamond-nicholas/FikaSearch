import movieReducer from './movie';
import genreReducer from './genre';
import searchReducer from './search';

import { combineReducers } from 'redux';

const allReducers = combineReducers({
  movie: movieReducer,
  genre: genreReducer,
  search: searchReducer,
});

export default allReducers;
