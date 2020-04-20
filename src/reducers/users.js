import * as Types from '../actions/types';

const initialState = null;

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case Types.GET_USERS:
      return {
        ...state,
        ...payload,
      };

    default:
      return state;
  }
}
