import * as Types from './types';
import * as API from '../utils/api';
import { setLoading } from './loading';

export const getUsers = () => async (dispatch) => {
  dispatch(setLoading(true));

  const users = await API.getUsers();

  dispatch({
    type: Types.GET_USERS,
    payload: users,
  });

  dispatch(setLoading(false));
};
