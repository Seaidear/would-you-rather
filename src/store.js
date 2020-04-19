import { createStore } from 'redux';
import rootReducer from './reducers';
import middleware from './middleware';

const store = createStore(rootReducer, middleware);

export default store;
