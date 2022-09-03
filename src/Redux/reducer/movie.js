import * as actions from '../actions/actionTypes';
const initalState = {
  Data: [],
  isError: false,
};

const movieReducer = (state = initalState, { type, payload }) => {
  if (type === actions.MOVIE_LIST) {
    return {
      ...state,
      Data: payload,
    };
  } else return state;
};

export default movieReducer;
