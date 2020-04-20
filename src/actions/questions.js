import * as Types from './types';
import * as API from '../utils/api';
import { setLoading } from './loading';
import { getUsers } from './users';

export const getQuestions = () => async (dispatch) => {
  dispatch(setLoading(true));

  const data = await API.getInitialData();
  const { users, questions } = data;

  Object.values(questions).forEach((question) => {
    question.authorName = users[question.author].name;
    question.authorAvatarURL = users[question.author].avatarURL;
  });

  dispatch({
    type: Types.GET_QUESTIONS,
    payload: questions,
  });

  dispatch(setLoading(false));
};

export const addQuestion = (question) => async (dispatch) => {
  dispatch(setLoading(true));

  const formattedQuestion = await API.saveQuestion(question);

  dispatch({
    type: Types.ADD_QUESTION,
    payload: formattedQuestion,
  });

  dispatch(getUsers());
  dispatch(getQuestions());

  dispatch(setLoading(false));
};

export const saveAnswer = ({ authedUser, qid, answer }) => async (dispatch) => {
  dispatch(setLoading(true));
  await API.saveQuestionAnswer({ authedUser, qid, answer });
  dispatch(getUsers());
  dispatch(getQuestions());
  dispatch(setLoading(false));
};
