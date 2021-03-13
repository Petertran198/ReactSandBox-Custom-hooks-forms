import React from 'react'
import TextField from '@material-ui/core/TextField';
import Paper from "@material-ui/core/Paper"
import useForm from '../../CustomHooksEx/useForm';

const TodoForm = (props) => {
    const [input, setInput, resetInput] = useForm('');
    return (
        <Paper>
            <form >
                <TextField id="standard-basic" label="Standard" fullWidth value={input} onChange={setInput}/>
            </form>
        </Paper>
    )
}

export default TodoForm
