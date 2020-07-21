import React, { useState, useEffect } from 'react';
import './App.scss';

import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'



function App() {
  const [todo, setTodo] = useState([
    {
      text: "This is a demo todo",
      isComplete: false
    },
    {
      text: "You can add more todo like this",
      isComplete: false
    },
    {
      text: "Add by entering the todo in the form below",
      isComplete: false
    },
    {
      text: "To complete a todo, press the 'complete' button",
      isComplete: true
    },
    {
      text: "To delete, press teh delete button",
      isComplete: false
    }
  ]);


  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem('todo'));
    return (
      setTodo(todos)
    )
  }, [])

  const [interactions, setInteractions] = useState(0);

  const addTodo = text => {
    setInteractions(interactions + 1);
    const newTodo = [...todo, {
      text: text,
      isComplete: false
    }];
    localStorage.setItem("todo", JSON.stringify(newTodo));
    setTodo(newTodo);
  }

  const toggleTodo = index => {
    setInteractions(interactions + 1);
    const newTodo = [...todo];
    newTodo[index].isComplete = !newTodo[index].isComplete;
    localStorage.setItem("todo", JSON.stringify(newTodo));
    setTodo(newTodo);
  }


  const deleteTodo = index => {
    setInteractions(interactions + 1);
    const newTodo = [...todo];
    newTodo.splice(index, 1);
    localStorage.setItem("todo", JSON.stringify(newTodo));
    setTodo(newTodo);
  }

  return (
    <>
      <h1>Todo App</h1>
      <div className="todo-container">
        {
          todo.length === 0 ? (<h2
            style={{
              fontFamily: "Poppins",
              width: "100%",
              height: "100%",
              textAlign: "center",
              color: "#fff"
            }}
          >Add todo using the input below</h2>) : <TodoList
              todos={todo}
              addTodo={addTodo}
              deleteTodo={deleteTodo}
              toggleTodo={toggleTodo}
            />
        }
        <TodoForm addTodo={addTodo} />
        <div className="status" style={{ fontFamily: "Poppins" }}>
          <span style={{
            background: "orangered", borderRadius: "5px", padding: "5px", fontSize: "0.6em",
            color: "white"
          }} className="count">Todos : {todo.length}</span>
          <span style={{
            background: "green", borderRadius: "5px", padding: "5px", fontSize: "0.6em",
            color: "white"
          }} className="count">Interections : {interactions}</span>
        </div>
      </div>
    </>
  );
}

export default App;
