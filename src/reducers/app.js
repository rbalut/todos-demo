import { SET_FILTER } from '../actions/appActions';

const initialState = {
  filter: 'SHOW_ALL',
};

const app = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILTER:
      return {
        ...state,
        filter: action.payload,
      };
    default:
      return state;
  }
};

export default app;
