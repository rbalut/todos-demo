import { TODO_ADD } from '../actions/listActions';

const initialState = [];

const list = (state = initialState, action) => {
  switch (action.type) {
    case TODO_ADD:
      return [
        ...state,
        {
          id: action.payload.id,
          text: action.payload.text,
          completed: false,
        },
      ];
    case 'TOGGLE_TODO':
      return state.map((todo) => (
        (todo.id === action.id) ? { ...todo, completed: !todo.completed } : todo
      ));
    default:
      return state;
  }
};

export default list;
