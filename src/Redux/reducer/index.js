import installedReducer from './installed';

import { combineReducers } from 'redux';

const allReducers = combineReducers({
  install: installedReducer,
});

export default allReducers;
