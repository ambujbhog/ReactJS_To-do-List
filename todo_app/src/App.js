import './App.css';
import React, { useState, useEffect } from 'react';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core'; 
import Todo from './Todo';
import db from './firebase';
import firebase from 'firebase';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

// when the app loads, we need to fetch data to our list
  useEffect(() => {
    // this code fires when the app.js loads
    db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => doc.data().todo))
    })
  }, []);

  const addTodo = (event) => {
    //this will start when we click the button
    event.preventDefault(); // will stop refresh

    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })

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
