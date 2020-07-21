import React, { useState, useEffect } from 'react';
import './App.scss';

import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import Skeleton from './data/skeleton'


function App() {
  const [todo, setTodo] = useState([]);


  useEffect(() => {
    let localTodo = JSON.parse(localStorage.getItem("todo"));
    let todos;
    if (localTodo == null) {
      todos = Skeleton;
    }
    else todos = localTodo;

    localStorage.setItem("todo", JSON.stringify(todos));
    return setTodo(todos);
  }, []);

  const [interactions, setInteractions] = useState(0);

  const addTodo = text => {
    setInteractions(interactions + 1);
    const newTodo = [{
      text: text,
      isComplete: false
    }, ...todo];
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
          (todo === undefined || todo.length === 0) ? (<h2
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
            background: "orangered", borderRadius: "5px", padding: "5px", fontSize: "0.8em",
            color: "white"
          }} className="count">Todos : {todo.length}</span>
          <button
            onClick={() => {
              localStorage.clear();
              setTodo(Skeleton);
              localStorage.setItem('todo', JSON.stringify(Skeleton));
            }}
            className="reset">
            Reset
           </button>
          <span style={{
            background: "green", borderRadius: "5px", padding: "5px", fontSize: "0.8em",
            color: "white"
          }} className="count">Interactions : {interactions}</span>
        </div>
      </div>
    </>
  );
}

export default App;
