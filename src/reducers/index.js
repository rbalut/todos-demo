import { combineReducers } from 'redux';
import list from './list';
import todoForm from './todoForm';

const rootReducer = combineReducers({
  list,
  todoForm,
});

export default rootReducer;
