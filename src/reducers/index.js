import { combineReducers } from 'redux';
import { createForms } from 'react-redux-form';
import list from './list';

const initialTodoForm = {
  description: 'test',
};

const rootReducer = combineReducers({
  list,
  ...createForms({
    todo: initialTodoForm,
  }),

});


export default rootReducer;
