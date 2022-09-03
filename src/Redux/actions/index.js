import * as actions from './actionTypes';

export const data = (sdks) => ({
  type: actions.INSTALLED_SDK,
  payload: sdks,
});
