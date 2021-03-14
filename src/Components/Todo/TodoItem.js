import React from 'react'
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const TodoItem = (props) => {
    return (
        <ListItem href="#simple-list">
            <ListItemText>
                {props.todo.task}
            </ListItemText>
        </ListItem> 
    )
}

export default TodoItem
