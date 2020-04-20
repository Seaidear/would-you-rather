import * as Types from '../actions/types';

const initialState = {};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case Types.GET_QUESTIONS:
      return {
        ...state,
        ...payload,
      };

    case Types.ADD_QUESTION:
      return {
        ...state,
        [payload.id]: payload,
      };

    default:
      return state;
  }
}
