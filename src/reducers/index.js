import { combineReducers } from 'redux';
import app from './app';
import list from './list';
import todoForm from './todoForm';

const rootReducer = combineReducers({
  app,
  list,
  todoForm,
});

export default rootReducer;
