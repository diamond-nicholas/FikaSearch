import * as actions from '../actions/actionTypes';

const initialState = {
  Data: [],
  isError: false,
};

const genreReducer = (state = initialState, { type, payload }) => {
  if (type === actions.GENRES) {
    return {
      ...state,
      Data: payload,
    };
  } else return state;
};

export default genreReducer;
