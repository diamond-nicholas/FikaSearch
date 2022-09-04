import * as actions from '../actions/actionTypes';

const initialState = {
  Data: [],
  isError: false,
};

const searchReducer = (state = initialState, { type, payload }) => {
  if (type === actions.SEARCH) {
    return {
      ...state,
      Data: payload,
    };
  } else return state;
};

export default searchReducer;
