// import { useEffect, useState } from "react"
import { effect, signal } from "@preact/signals-react"

import Navbar from './components/Navbar'
import TodoList from './components/TodoList'
import Sidebar from './components/Sidebar'

const LOCAL_STORAGE_KEY = "TODOS"

export const todos = signal(getTodos())

function getTodos() {
    const value = localStorage.getItem( LOCAL_STORAGE_KEY )
    // console.log(value == null, value)
    if ( value == null ) return []
    // console.log(JSON.parse(value))
    console.log(JSON.stringify(value))
    return JSON.parse(value)
}

effect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos.value))
})

const App = () => {
    console.log("Render App")

    // const [ todos, setTodos ] = useState(() => {
    //     const value = localStorage.getItem( LOCAL_STORAGE_KEY )
    //     // console.log(value == null, value)
    //     if ( value == null ) return []
    //     // console.log(JSON.parse(value))
    //     console.log(JSON.stringify(value))
    //     return JSON.parse(value)
    // })

    // const addTodo = ( name ) => {
    //     setTodos(prevTodos => {
    //         return [
    //             ...prevTodos,
    //             { id: crypto.randomUUID(), name, completed: false }
    //         ]
    //     })
    // }

    // const toggleTodo = (id, completed) => {
    //     setTodos(prevTodos => {
    //         return prevTodos.map(todo => {
    //             if (todo.id === id ) {
    //                 return { ...todo, completed }
    //             }

    //             return todo
    //         })
    //     })
    // }

    // useEffect(() => {
    //     localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
    // }, [todos])

    return (
        <div className='wrapper'>
            <Navbar 
                todos={ todos }
            />
            <main>
                <TodoList 
                    // addTodo={ addTodo }
                    // toggleTodo={ toggleTodo }
                    todos={ todos }
                />
            </main>
            <Sidebar />
        </div>
    )
}

export default App
