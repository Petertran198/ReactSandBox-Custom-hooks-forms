import React from 'react'
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';

const TodoItem = (props) => {
    
    return (
        <ListItem href="#simple-list">
            <Checkbox
                checked={props.todo.completed}
                onClick={()=> props.toggleTodoCheckBox(props.todo)}            
            />
            <ListItemText>
                {props.todo.task}
            </ListItemText>
        </ListItem> 
    )
}

export default TodoItem
