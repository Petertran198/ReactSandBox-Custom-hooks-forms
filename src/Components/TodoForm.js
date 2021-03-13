import React from 'react'
import TextField from '@material-ui/core/TextField';
import TodoList from './Todo/TodoList';

const TodoForm = (props) => {
    return (
        <div>
            <TextField id="standard-basic" label="Standard" fullWidth/>
            <TodoList todos={props.todos}/>
        </div>
    )
}

export default TodoForm
