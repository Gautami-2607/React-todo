import React from 'react'
import TodoListItem from './TodoListItem'
import "./Styled.css"

export default class TodoList extends React.Component {
    state = {
        list_title: "Hey, i am the title.",
        todos: [
            {
                title: "Go jogging",
                completed: false
            },
            {
                title: "run on the beach",
                completed: true
            }
        ]
    }

    render() {
        return (
            <div className='todo-list'>
                <h2>todo list ...</h2>
                <label>Title</label><br />
                <input placeholder="Enter title..." type="text" value={this.state.list_title} />
                {
                    this.state.todos.map(todo => {
                        return (
                            // <div>
                            //     {todo.title} and {todo.completed.toString()}
                            // </div>
                            <TodoListItem />
                        )
                    })
                }

                <br />
                <input placeholder="Todo Item Name..." type="text"/>
                <br />
                <button>Add item to list</button>
            </div>
        )
    } 
}