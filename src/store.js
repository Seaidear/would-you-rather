import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';
import middleware from './middleware';

const initialState = {};

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(middleware),
);

export default store;
