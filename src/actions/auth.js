import * as Types from './types';

export const setUser = (id) => (dispatch) => {
  dispatch({
    type: Types.SET_AUTHED_USER,
    payload: id,
  });
};
