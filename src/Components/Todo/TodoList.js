import React from 'react'
import TodoItem from './TodoItem'
import Paper from "@material-ui/core/Paper"
import Divider from '@material-ui/core/Divider';

const TodoList = (props) => {
    return (
        <Paper>
            {
                props.todos.map(todo => 
                    <>
                        <TodoItem 
                            todo={todo}
                            key={todo.id} 
                            toggleTodoCheckBox={props.toggleTodoCheckBox}
                            handleDeleteTodoTask={props.handleDeleteTodoTask}
                        />
                        <Divider/>
                    </>
            )}
        </Paper>
    )
}

export default TodoList
