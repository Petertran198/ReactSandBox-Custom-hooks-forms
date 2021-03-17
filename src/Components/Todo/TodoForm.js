import React from 'react'
import TextField from '@material-ui/core/TextField';
import Paper from "@material-ui/core/Paper"
import useForm from '../../CustomHooksEx/useForm';

const TodoForm = (props) => {
    const [input, setInput, resetInput] = useForm('');

    const submitedTodo =(e)=>{
        e.preventDefault()
        props.addTodo(input);
        resetInput();
    }
    return (
        <Paper style={{margin: "1rem 0", padding: "0 1rem"}}>
            <form onSubmit={ e => submitedTodo(e)} >
                <TextField 
                    id="standard-basic" 
                    label="Add New Todo" 
                    fullWidth value={input} 
                    onChange={setInput} 
                    margin="normal"
                />
            </form>
        </Paper>
    )
}

export default TodoForm
