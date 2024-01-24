import { useState } from "react"
// import { effect, signal } from "@preact/signals-react"

// const LOCAL_STORAGE_KEY = "TODOS"

// const name = signal("John Cor")
// console.log(name.value)

// setInterval(() => {
//     name.value = Math.random()
// }, 500)

// export const todos = signal(getTodos())

// function getTodos() {
//     const value = localStorage.getItem( LOCAL_STORAGE_KEY )
//     // console.log(value == null, value)
//     if ( value == null ) return []
//     // console.log(JSON.parse(value))
//     console.log(JSON.stringify(value))
//     return JSON.parse(value)
// }

// effect(() => {
//     localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos.value))
// })


// const TodoList = ({ addTodo, toggleTodo, todos }) => {
const TodoList = ({todos}) => {
    console.log("Render TodoList")

    // const [ todos, setTodos ] = useState(() => {
    //     const value = localStorage.getItem( LOCAL_STORAGE_KEY )
    //     // console.log(value == null, value)
    //     if ( value == null ) return []
    //     // console.log(JSON.parse(value))
    //     console.log(JSON.stringify(value))
    //     return JSON.parse(value)
    // })


    const[ newTodoName, setNewTodoName ] = useState("")

    // const[ newTodoName, setNewTodoName ] = useState("")

    // const handleSubmit = (e) => {
    //     e.preventDefault()

    //     addTodo( newTodoName )

    //     setNewTodoName("")
    // }

    const addTodo = (e) => {
        e.preventDefault()

        // setTodos(prevTodos => {
        //     return [
        //         ...prevTodos,
        //         { id: crypto.randomUUID(), name: newTodoName, completed: false }
        //     ]
        // })
        todos.value = [
            ...todos.value,
            { id: crypto.randomUUID(), name: newTodoName, completed: false }
        ]

        setNewTodoName("")
    }

    const toggleTodo = (id, completed) => {
        // setTodos(prevTodos => {
        //     return prevTodos.map(todo => {
        //         if (todo.id === id ) {
        //             return { ...todo, completed }
        //         }

        //         return todo
        //     })
        // })
        todos.value =  todos.value.map(todo => {
            if (todo.id === id ) {
                return { ...todo, completed }
            }

            return todo
        })
    }

    // useEffect(() => {
    //     localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
    // }, [todos])



    return (
        <div>
            {/* <h1>Todos - {name.value}</h1> */}
            <h1>Todos</h1>
            <form onSubmit={ addTodo } className="form">
            {/* <form onSubmit={ handleSubmit } className="form"> */}
                <label htmlFor="">New Task</label>
                <input 
                    value={ newTodoName }
                    onChange={ e => setNewTodoName(e.target.value) }
                    type="text" 
                />
                <button>Add</button>
            </form>
            <ul>
                {/* {todos.map(todo => ( */}
                {todos.value.map(todo => (
                    <li key={todo.id}>
                        <label htmlFor="">
                            <input 
                                type="checkbox"
                                checked={ todo.completed } 
                                onChange={ e => toggleTodo(todo.id, e.target.checked) }
                            />
                            {todo.name}
                        </label>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TodoList