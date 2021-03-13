import React from 'react'

const TodoItem = (props) => {
    return (
        <div>
            <li>{props.todo.task}</li>
        </div>
    )
}

export default TodoItem
