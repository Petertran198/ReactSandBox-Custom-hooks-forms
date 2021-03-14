import React, { useState } from 'react'
import Typography from "@material-ui/core/Typography"
import Paper from "@material-ui/core/Paper"
import AppBar from "@material-ui/core/AppBar"
import ToolBar from "@material-ui/core/Toolbar"
import Grid from "@material-ui/core/Grid"
import Button from "@material-ui/core/Button"
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import useLocalStorage from '../../CustomHooksEx/useLocalStorage'

// -TodoApp
//      -TodoForm
//      -TodoList
//      -TodoItem

export const TodoApp = () => {
    const initalTodos = [
        {id: 1, task: "Clean Fishtank", completed: true},
        {id: 2, task: "Wash Car", completed: true},
        {id: 3, task: "Mow Lawn", completed: false}
    ]
    const [todos, setTodos] = useLocalStorage("todos", initalTodos);

    const addTodo = (input) =>{
        let addedTodo = [...todos, {id: 4, task: input , completed: false}];
        setTodos(addedTodo);
    }

    const toggleTodoCheckBox = (passedInTodo) =>{
        //filter out the passedInTodo and toggle the completed param 
        const changedTodo = todos.map(todo =>
            todo.id === passedInTodo.id
              ? { ...todo, completed: !todo.completed }
              : todo
          );

        console.log(changedTodo);
        setTodos(changedTodo)
    }
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
            >
                <AppBar color="primary" position="static" style={{height: "64px"}}>
                    <ToolBar>
                        <Typography color='inherit'>Todos With Hooks</Typography>
                    </ToolBar>
                </AppBar>
                <Grid container justify="center" style={{marginTop: "1rem"}}>
                    <Grid item xs={12} sm={12} md={8} lg={8}>
                        <TodoForm addTodo={addTodo}/>
                        <TodoList 
                            todos={todos}
                            toggleTodoCheckBox={toggleTodoCheckBox}
                        />
                    </Grid>
                </Grid>
            </Paper>
        </div>
    )
}

export default TodoApp;