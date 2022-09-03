import installedReducer from './installed';
import genreReducer from './genre';

import { combineReducers } from 'redux';

const allReducers = combineReducers({
  install: installedReducer,
  genre: genreReducer,
});

export default allReducers;
