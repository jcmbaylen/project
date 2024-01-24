import { useState, useRef, useEffect } from 'react'
import { useOutletContext } from 'react-router-dom'

type Props = {
    test2: string
}

const Home = () =>{
    const { test2 } = useOutletContext<Props>()

    const [count, setCount] = useState(0)
    const buttonRef = useRef(null)

    const handleIncrement = () => setCount(count + 1)

    useEffect(() => {
        if (buttonRef.current) {
            setTimeout(() => {
                console.log("element: ", buttonRef.current)
                // buttonRef.current.style.background = 'green'
            }, 3000)
            console.log("element: ", buttonRef.current)
        }
    }, [])

    return (
        <div className="Home">
            <h3>This is Home page</h3>
            <h5>The Context is: { test2 }</h5>
            <p>Hindi makukuha ni PARENT OR SIBILNGS ang outlet ng Child OR SIBLINGS nya</p>

            <div>
                <h1>useState</h1>
                <h3>Count: { count }</h3>
                <button 
                    ref={ buttonRef }
                    onClick={ handleIncrement }
                >
                    Increment
                </button>
                <p>Ang useRef ay ginagamit para sa reference like document.querySelectore, document.getElementById</p>
            </div>
        </div>
    )
}

export default Home
