import React from 'react'
import TodoList from './TodoList'
import { Link, Route, Routes } from 'react-router-dom'

const Profile = () => {
    return (
        <div>
            Profile
        </div>
    )
}

const Navigation = () => {
    return (
        <div>
            <Link to='/todos'>Todo List</Link><br />
            <Link to='/profile'>Profile</Link>
        </div>
    )
}

class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Routes>
                    <Route path='/todos' element={<TodoList />} />
                    <Route path='/profile' element={<Profile />} />
                </Routes>
                <Navigation />
            </React.Fragment>
        )
    }
}

export default App