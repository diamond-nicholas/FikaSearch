import * as actions from '../actions/actionTypes';
const initalState = {
  Data: [],
  isLoading: true,
  isError: false,
};

const installedReducer = (state = initalState, { type, payload }) => {
  if (type === actions.INSTALLED_SDK) {
    return {
      ...state,
      Data: payload,
      isLoading: false,
    };
  } else return state;
};

export default installedReducer;
