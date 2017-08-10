import { createSelector } from 'reselect';

export const getVisibilityFilter = (state) => state.app.filter;
export const getTodos = (state) => state.list;

export const getVisibleTodos = createSelector(
  [getVisibilityFilter, getTodos],
  (visibilityFilter, todos) => {
    switch (visibilityFilter) {
      case 'SHOW_COMPLETED':
        return todos.filter((item) => item.completed);
      case 'SHOW_ACTIVE':
        return todos.filter((item) => !item.completed);
      case 'SHOW_ALL':
      default:
        return todos;
    }
  },
);
