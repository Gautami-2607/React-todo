import React from 'react'
import TodoListItem from './TodoListItem'
import "./Styled.css"
import axios from 'axios'

export default class TodoList extends React.Component {

    constructor(){
        super()
        this.state = {
            list_title: "",
            current_value: "",
            todos: [
            ]
        }
        this.deleteTodoByIndex = this.deleteTodoByIndex.bind(this)
    }

    deleteTodoByIndex(index){
        // console.log("index",index)
        this.setState(prevState => (
            {
                todos: 
                [...prevState.todos.slice(0, index),
                ...prevState.todos.slice(index + 1)],
            }
        ))
    }

    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/todos/5")
        .then(data => this.setState({todos: [{id: data.data.id, title: data.data.title, completed: data.data.completed}]}))
        .catch(error => console.log(error))
    }

    render() {
        return (
            <div className='todo-list'>
                <h2>todo list ...</h2>
                <label>Title</label><br />
                <input 
                placeholder="Enter title..." 
                type="text" 
                value={this.state.list_title} 
                onChange={(e)=> {this.setState({list_title: e.target.value})}}
                />

                {
                    this.state.todos.map((todo, index) => {
                        return (
                            // <div>
                            //     {todo.title} and {todo.completed.toString()}
                            // </div>
                            <TodoListItem 
                            key={index} 
                            index = {index}
                            deleteTodoByIndex={this.deleteTodoByIndex} 
                            title={todo.title} 
                            completed={todo.completed}
                            />
                        )
                    })
                }

                <br />

                <input 
                placeholder="Todo Item Name..." 
                type="text"
                value={this.state.current_value}
                onChange={(e)=>{this.setState({current_value:e.target.value})}}
                />
                
                <button onClick={()=> { 
                    this.setState(prevState => 
                    ({
                        todos: prevState.todos.concat(
                            {title:this.state.current_value, completed:false}
                        ),
                        current_value: ""
                    })
                    )
                }}>
                Add item to list
                </button>
            </div>
        )
    } 
}