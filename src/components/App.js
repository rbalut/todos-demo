import React from 'react';
import TodoForm from '../containers/TodoForm';
import List from '../containers/List';
import './App.css';

const App = () => (
  <div className="App">
    <TodoForm />
    <List />
    <p className="App-intro">
      To get started, edit <code>src/App.js</code> and save to reload.
    </p>
  </div>
);

export default App;
