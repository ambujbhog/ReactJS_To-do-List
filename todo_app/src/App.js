import './App.css';
import React, { useState } from 'react';

function App() {
  const [todos, setTodo] = useState(['Something', 'Whats up','ben']);
  return ( 
    <div className="App">
      <h1> Hey there !</h1>
      <input/>
      <button>Add todo</button>
      <ul>
        {todos.map(todo => (
          <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
