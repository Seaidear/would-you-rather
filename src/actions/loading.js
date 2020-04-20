import * as Types from './types';

export const setLoading = (isLoading) => (dispatch, state) => {
  state.loading !== isLoading &&
    dispatch({
      type: Types.TOGGLE_LOADING,
      payload: isLoading,
    });
};
