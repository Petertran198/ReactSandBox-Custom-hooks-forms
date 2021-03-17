import React from 'react'
import useToggle from '../../CustomHooksEx/useToggle';
import EditTextField from './EditTextField';
import {Delete, Edit} from '@material-ui/icons';
import IconButton from '@material-ui/core/IconButton';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { green } from '@material-ui/core/colors';


const TodoItem = (props) => {
    const [isEditing, setIsEditing] = useToggle(false);
    const [open, setOpen] = useToggle(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
      props.handleDeleteTodoTask(props.todo.id)
    };

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
                <Edit style={{ color: green[800] }}/>
            </IconButton>
            <IconButton variant="outlined" color="Secondary" onClick={handleClickOpen}>
                <Delete/>
            </IconButton>
            <Dialog
                open={open}
                onClose={()=>setOpen(false)}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Confirm Deletion"}</DialogTitle>
                <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    Are you sure you want to delete task?
                </DialogContentText>
                </DialogContent>
                <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Delete Task
                </Button>
                <Button onClick={()=>setOpen(false)}      
                    color="Warning" autoFocus>
                    Cancel
                </Button>
                </DialogActions>
            </Dialog>         
        </ListItem> 
    )
}

export default TodoItem
