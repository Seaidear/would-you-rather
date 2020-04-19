import * as Types from '../actions/types';

const initialState = { user: 'sarahedo' };

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case Types.SET_AUTHED_USER:
      return { ...state, user: payload };

    default:
      return state;
  }
}
