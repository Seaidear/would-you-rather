import { combineReducers } from 'redux';
import auth from './auth';
import loading from './loading';
import users from './users';
import questions from './questions';

const rootReducer = combineReducers({ auth, loading, users, questions });

export default rootReducer;
