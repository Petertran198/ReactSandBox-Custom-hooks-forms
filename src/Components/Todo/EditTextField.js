import React from 'react'
import TextField from '@material-ui/core/TextField';
import useForm from "../../CustomHooksEx/useForm";
const EditTextField = (props) => {
    const [task, setTask] = useForm(props.todo.task);

    return (
        <form onSubmit={e => {
            e.preventDefault();
            props.updateTodo(props.todo, e.target.edit.value);
            props.setIsEditing();
        }}>
                <TextField fullWidth name="edit" value={task} onChange={setTask}/>
        </form>
    )
}

export default EditTextField
