import React from 'react'



export default ({ index, todo, toggleTodo, deleteTodo }) => {
    return (
        <div className="todo">
            <p style={{
                textDecoration: todo.isComplete ? "line-through" : "none"
            }}>{todo.text}</p>
            <div className="actions">
                <button onClick={() => toggleTodo(index)}> {todo.isComplete ? "Incomplete" : "Complete"} </button>
                <button className="delete" onClick={() => deleteTodo(index)}> Delete </button>
            </div>
        </div>
    )
};