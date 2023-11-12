import React from 'react'
import TodoList from './TodoList'

class App extends React.Component{
    render() {
        return (
        <div>
            <TodoList />
        </div>
        )   
    }
}

// eslint-disable-next-line
// const based component:
// const App = () => {
//     return (
//         <div>
//             We created another react component.
//         </div>
//     )
// }

export default App