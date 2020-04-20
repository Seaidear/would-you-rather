import * as Types from '../actions/types';

const initialState = true;

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case Types.TOGGLE_LOADING:
      return payload;

    default:
      return state;
  }
}
