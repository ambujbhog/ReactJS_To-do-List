import './App.css';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core'; 
import React, { useState } from 'react';
import Todo from './Todo'

function App() {
  const [todos, setTodos] = useState(['Something', 'Whats up','ben']);
  const [input, setInput] = useState('');
  const addTodo = (event) => {
    //this will start when we click the button
    event.preventDefault(); // will stop refresh
    setTodos([...todos, input]);
    setInput(''); // clear the input field after clicking submit 
  }
  
  return ( 
    <div className="App">
      <h1> Hey there !</h1>
      <form>
        

        <FormControl>
          <InputLabel>Write a to-do</InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)}/>
        </FormControl>


        <Button disabled={!input} type='submit' onClick={addTodo} variant="contained" color="primary">
          Add To-do
          </Button>
      </form>
 
      <ul>
        {todos.map(todo => (
          <Todo text ={todo}/>      
        ))}
      </ul>
    </div>
  );
}

export default App;
