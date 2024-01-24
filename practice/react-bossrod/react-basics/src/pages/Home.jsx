import { useState, useRef, useEffect, useLayoutEffect } from 'react'
import { useOutletContext } from 'react-router-dom'

const HomePage = () =>{
    const { RootLayoutContext } = useOutletContext()

    const [count, setCount] = useState(0)
    const [count2, setCount2] = useState(0)
    const [count3, setCount3] = useState(0)
    const [count4, setCount4] = useState(0)
    const buttonRef = useRef(null)

    const handleIncrement = () => setCount(count + 1)
    const handleIncrement2 = () => setCount2(count2 + 1)
    const handleIncrement3 = () => setCount3(count3 + 1)

    useEffect(() => {
        console.log("Always Run")
    })

    useEffect(() => {
        console.log("RUN ONLY EVERYTIME THE PAGE RELOAD/REFRESH")
    }, [])

    useEffect(() => {
        console.log("Dependecy of useEffect")
    }, [count2])

    // Ito ay Clean Up
    //PROBLEM  - mariming nacoconsole na Timer Count or maraming setTimeout nacreate
    useEffect(() => {
        const timerId = setTimeout(() => {
            console.log(`Timer Count: ${count3}`)
        }, 2000)


        //SOLUTION - Clean Up / return arrow function
        // Everytime na magrun and useEffect na ito,
        // or everytime na may magbago na state dito sa BUONG COMPONENT na ITO
        // Irarun nya muna itong Clean Up or return arrow function
        // Para yung previous nadedelete nya
        return () => {
            clearTimeout(timerId)
        }
    }, [count3])

    //Infinite Loop - DEPENDECY MO YUNG sine-setState mo
    //Problem
    // useEffect(() => {
    //     console.log("Infinite Loop")
    //     setCount4(count4 + 1)
    // }, [count4])
    //Solution
    useEffect(() => {
        console.log("Solution in Infinite Loop")
        // console.log(count4)
        // Call-Back function
        setCount4((prev) => prev + 1)
        // nagiging 2 ang initial value sa web ng count 4 dahil sa strict mode na nagrrun ng 2 times
    }, [])

    //Almost same sila ni useEffect
    // Pinagkaiba lang nila ni useLayoutEffect ay laging inuuna si useLayoutEffect rather than useEffect
    useEffect(() => {
        console.log("useEffect")
    }, [])
    useLayoutEffect(() => {
        console.log("useLayoutEffect")
    }, [])


    useEffect(() => {
        if (buttonRef.current) {
            setTimeout(() => {
                console.log("element: ", buttonRef.current)
                buttonRef.current.style.background = 'green'
            }, 3000)
            console.log("element: ", buttonRef.current)
        }
    }, [])

    return (
        <div className="Home">
            <h3>This is Home page</h3>
            <h5>The Context is: { RootLayoutContext }</h5>
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
                <h3>Count2: { count2 }</h3>
                <button
                    onClick={ handleIncrement2 }
                >
                    DEPENDENCY OF useEffect
                </button>
                <h3>Count3: { count3 }</h3>
                <button
                    onClick={ handleIncrement3 }
                >
                    Clean Up
                </button>
                <h3>Infinite Loop Count4: { count4 }</h3>
                <p>Ang useRef ay ginagamit para sa reference like document.querySelectore, document.getElementById</p>
                <p>Ang useEffect ay always magrarun kapag walang nilagay na <b>DEPENDENCY</b> everytime na may magbabago sa kahit anong <b>STATE</b> dito sa HomePage</p>
                <p>Ang useEffect ay magrarun depende sa <b>DEPENDENCY</b> if <b>[]BRACKET</b> lang, magrarun lang ito every <b>PAGE RELOAD/REFRESH</b></p>
            </div>
        </div>
    )
}

export default HomePage
