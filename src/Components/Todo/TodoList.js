import React from 'react'
import TodoItem from './TodoItem'
import Paper from "@material-ui/core/Paper"
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

const TodoList = (props) => {
    return (
        <Paper>
            {
                props.todos.map(todo => 
                    <>
                        <ListItem href="#simple-list">
                            <ListItemText primary={todo.task} />
                        </ListItem>
                        <Divider/>
                    </>
            )}
        </Paper>
    )
}

export default TodoList
