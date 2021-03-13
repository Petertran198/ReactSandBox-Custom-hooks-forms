import React, { useState } from 'react'
import Typography from "@material-ui/core/Typography"
import Paper from "@material-ui/core/Paper"
import AppBar from "@material-ui/core/AppBar"
import ToolBar from "@material-ui/core/Toolbar"
import Grid from "@material-ui/core/Grid"
import Button from "@material-ui/core/Button"
export const Todo = () => {
    const [todos, setTodos] = useState()
    const initalTodos = [
        {id: 1, task: "Clean Fishtank", completed: false},
        {id: 2, task: "Wash Car", completed: true},
        {id: 1, task: "Mow Lawn", completed: false}
    ]
    return (
        <div>
            <Paper 
                style={{
                    padding: 0,
                    margin: 0,
                    height: "100vh",
                    backgroundColor: "#fafafa"
                }}
                elevation={0}
            />
            <AppBar color="primary" position="static" style={{height: "64px"}}>
                <ToolBar>
                    <Typography color='inherit'>Todos With Hooks</Typography>
                </ToolBar>
            </AppBar>
        </div>
    )
}

export default Todo;