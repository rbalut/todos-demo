import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { loadState, saveState } from './localStorage';
import App from './components/App';
import reducer from './reducers';


const persistedState = loadState();

const store = createStore(
  reducer,
  persistedState,
  applyMiddleware(thunk, logger),
);

store.subscribe(() => {
  saveState({
    list: store.getState().list,
  });
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
