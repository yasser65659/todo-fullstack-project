import React from 'react';
import Login from './components/Login';
import AddTask from './components/AddTask';
import TodoList from './components/TodoList';

function App() {
  return (
    <div>
      <h1>ToDo App</h1>
      <Login />
      <AddTask />
      <TodoList />
    </div>
  );
}

export default App;
