import * as Types from './types';
import * as API from '../utils/api';
import { setLoading } from './loading';

export const getUsers = () => async (dispatch) => {
  dispatch(setLoading(true));
  const users = await API.getUsers();

  Object.values(users).forEach((user) => {
    user.numberOfAnswers = Object.values(user.answers).length;
    user.numberOfQuestions = user.questions.length;
    user.score = user.numberOfQuestions + user.numberOfAnswers;
  });

  dispatch({
    type: Types.GET_USERS,
    payload: users,
  });
  dispatch(setLoading(false));
};
