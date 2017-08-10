import { actions } from 'react-redux-form';
import uuid from 'uuid';

export const TODO_ADD = 'todos-demo/list/ADD_TODO';
export const TODO_REMOVE = 'todos-demo/list/TODO_REMOVE';
export const TODO_TOGGLE = 'todos-demo/list/TODO_TOGGLE';

export const addTodo = (formData) => (dispatch) => {
  dispatch({
    type: TODO_ADD,
    payload: {
      id: uuid.v4(),
      text: formData.text,
    },
  });
  dispatch(actions.reset('todoForm.text'));
};

export const removeTodo = (id) => ({
  type: TODO_REMOVE,
  payload: id,
});

export const toggleTodo = (id) => ({
  type: TODO_TOGGLE,
  payload: id,
});
