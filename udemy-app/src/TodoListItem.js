import React from 'react'

const TodoListItem = (props) => {
    console.log(props)
        return (
            <div>
                <input type='checkbox' checked={props.completed}/>
                <span>{props.title}</span>&nbsp;
                <button onClick={()=> props.deleteTodoByIndex(props.index)}>Delete Todo</button>
            </div>
        )
}

export default TodoListItem