import React from 'react';
import TodoForm from '../containers/TodoForm';
import List from '../containers/List';
import Filters from '../components/Filters';
import './App.css';

const App = () => (
  <div className="App">
    <TodoForm />
    <List />
    <Filters />
  </div>
);

export default App;
