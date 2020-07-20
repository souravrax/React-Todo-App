import React, { useState } from 'react'


const TodoForm = ({ addTodo }) => {
    const [text, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text) addTodo(text);
        e.target.querySelector("input").value = "";
    }

    return (
        <form onSubmit={e => {
            handleSubmit(e);
        }}>
            <input type="text" name="newTodo" id="input-field"
                placeholder="Add your Todo by typing in..."
                onChange={e => {
                    setText(e.target.value);
                }}
            />
        </form>
    )
}

export default TodoForm;