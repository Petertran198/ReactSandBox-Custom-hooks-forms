import React from 'react'
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';

const TodoItem = (props) => {
    
    return (
        <ListItem href="#simple-list">
            <ListItemText>
                {props.todo.task}
            </ListItemText>
            <Checkbox
                checked={props.todo.completed}
                onClick={()=> props.toggleTodoCheckBox(props.todo)}            
            />
        </ListItem> 
    )
}

export default TodoItem
