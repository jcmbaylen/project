import { 
    computed, 
    // useSignal, 
    // useSignalEffect
 } from "@preact/signals-react"
// import { todos } from "./TodoList"

// const Navbar = ({todos}) => {
const Navbar = ({todos}) => {
    console.log("Render Navbar")

    const completedTodosCount = computed(() => {
        return todos.value.filter(todo => todo.completed).length
    })
    
    return (
        <nav className="nav">
            <div>
                {/* { todos.filter(todo => todo.completed).length } */}
                {/* Completed : { todos.value.filter(todo => todo.completed).length } */}
                Completed : { completedTodosCount.value }
            </div>
            <a href="/">Todos</a>
            <a href="/account">Account</a>
        </nav>
    )
}

export default Navbar