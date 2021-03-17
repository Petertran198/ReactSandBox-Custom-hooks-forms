import React from 'react'
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import {Delete, Edit} from '@material-ui/icons';
import IconButton from '@material-ui/core/IconButton';
import useToggle from '../../CustomHooksEx/useToggle';
import EditTextField from './EditTextField';

const TodoItem = (props) => {
    const [isEditing, setIsEditing] = useToggle(false);
    
    return (
        <ListItem href="#simple-list">
            { isEditing ?  <EditTextField 
                                updateTodo={props.updateTodo} 
                                todo={props.todo}
                                setIsEditing={()=>setIsEditing(isEditing)} /> :
                <>
                    <Checkbox
                        checked={props.todo.completed}
                        onClick={()=> props.toggleTodoCheckBox(props.todo)}            
                    />
                    <ListItemText style={{textDecoration: props.todo.completed && "line-through" }}>
                        {props.todo.task}
                    </ListItemText>
                </>
            }
            <IconButton aria-label="Edit" onClick={setIsEditing}>
                <Edit/>
            </IconButton>
            <IconButton aria-label="Delete" onClick={()=> props.handleDeleteTodoTask(props.todo.id)}>
                <Delete/>
            </IconButton>            
        </ListItem> 
    )
}

export default TodoItem
