import { useFetch } from "../shared/Hooks/useFetch"
// import { useEffect, useState } from 'react'

const TestPage = () => {
    const { data, loading } = useFetch({ url: 'https://jsonplaceholder.typicode.com/todos' })
    // if (loading) return 'Loading.....'
    //    const [ data, setData ] = useState([])
    // const [ loading, setLoading ] = useState(false)

    // useEffect(() => {
    //     // setLoading(true)
    //     fetch('https://jsonplaceholder.typicode.com/todos')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log("Data: ", data)
    //         setData(data)
    //     })
    //     // .then(() => setLoading(false))
    // },[])

    return (
        <div>
            <h1>TestPage</h1>
            {
                loading && 
                <div>
                    <h1>Loadinggggg .......</h1>
                </div>
            }
            {
                !loading && 
                <>
                    {data.map( todo => {
                        return (
                            <div key={ todo.id }>
                                <h5>id: { todo.id } | title: { todo.title } | Completed: {todo.completed} </h5>
                            </div>
                        )
                    })}
                </>
            }
        </div>
    )
}

export default TestPage