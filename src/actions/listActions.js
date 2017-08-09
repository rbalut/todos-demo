let nextTodoId = 0;

export const TODO_ADD = 'todos-demo/list/ADD_TODO';

export const addTodo = (text) => ({
  type: TODO_ADD,
  payload: {
    id: nextTodoId++,
    text,
  },
});

export const setVisibilityFilter = (filter) => ({
  type: 'SET_VISIBILITY_FILTER',
  filter,
});

export const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  id,
});
