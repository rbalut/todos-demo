import { actions } from 'react-redux-form';
import uuid from 'uuid';

export const TODO_ADD = 'todos-demo/list/ADD_TODO';

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

export const setVisibilityFilter = (filter) => ({
  type: 'SET_VISIBILITY_FILTER',
  filter,
});

export const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  id,
});
