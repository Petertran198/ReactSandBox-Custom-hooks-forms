import React from 'react'
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import {Delete, Edit} from '@material-ui/icons';
import IconButton from '@material-ui/core/IconButton';

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
            <IconButton>
                <Edit/>
            </IconButton>
            <IconButton>
                <Delete/>
            </IconButton>            

        </ListItem> 
    )
}

export default TodoItem
