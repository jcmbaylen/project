import { useState, useEffect, useRef } from "react"

const InputPage = () => {
    const [name, setName] = useState('')
    const renderCount = useRef(1)
    const inputRef = useRef()
    const prevName = useRef('')

    const onChange = ( event ) => {
        setName(event.target.value)
    }

    useEffect(() => {
        renderCount.current = renderCount.current + 1
    })

    useEffect(() => {
        prevName.current = name
    }, [name])

    const focus = () => {
        // console.log(inputRef.current)
        inputRef.current.value = "John Cor"
    }

    // Infinite Loop
    // const [renderCount, setRenderCount] = useState(0)
    // useEffect(() => {
    //     setRenderCount(prevRenderCount => prevRenderCount + 1)
    // })

  return (
    <div>
        <h1>Input</h1>
        <input 
            ref={ inputRef }
            type="text" 
            value={ name }
            onChange={ onChange }
        />
        <button onClick={ focus }>Focus</button>
        <h5>My name is { name } and it used to be { prevName.current }</h5>
        <h5>I rendered { renderCount.current } times</h5>

    </div>
  )
}

export default InputPage