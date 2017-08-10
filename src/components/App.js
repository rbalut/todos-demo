import React from 'react';
import { Grid } from 'react-bootstrap';
import TodoForm from '../containers/TodoForm';
import List from '../containers/List';
import Filters from '../components/Filters';
import './App.css';

const App = () => (
  <Grid>
    <h1>Get things done...</h1>
    <TodoForm />
    <List />
    <Filters />
  </Grid>
);

export default App;
