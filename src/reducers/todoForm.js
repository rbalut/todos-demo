import { combineForms } from 'react-redux-form';

const initialTodoForm = {
  text: '',
};

const todoForm = combineForms(initialTodoForm, 'todoForm');


export default todoForm;
