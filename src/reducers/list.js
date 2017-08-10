import { TODO_ADD, TODO_REMOVE, TODO_TOGGLE } from '../actions/listActions';

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
    case TODO_REMOVE:
      return state.filter((todo) => todo.id !== action.payload);
    case TODO_TOGGLE:
      return state.map((todo) => (
        (todo.id === action.payload) ? { ...todo, completed: !todo.completed } : todo
      ));
    default:
      return state;
  }
};

export default list;
