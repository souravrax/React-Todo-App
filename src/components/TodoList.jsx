import React from 'react'
import Todo from './Todo'

const TodoList = ({ todos, addTodo, toggleTodo, deleteTodo }) => (
    <div className="todo-list">
        {todos.map((elem, index) => (
            <Todo
                key={index}
                index={index}
                todo={elem}
                addTodo={addTodo}
                toggleTodo={toggleTodo}
                deleteTodo={deleteTodo}
            />
        ))}
    </div>
);

export default TodoList;