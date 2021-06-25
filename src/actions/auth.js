import * as Types from './types';

export const setUser = (id) => ({
  type: Types.SET_AUTHED_USER,
  payload: id,
});
