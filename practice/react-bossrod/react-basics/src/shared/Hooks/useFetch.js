import { useEffect, useState } from "react"

const useFetch = ({url}) => {
    const [ data, setData ] = useState([])
    const [ loading, setLoading ] = useState(false)

    useEffect(() => {
        setLoading(true)
        fetch(url)
        .then(response => response.json())
        .then(data => {
            // console.log("Data: ", data)
            setData(data)
        })
        .then(() => setLoading(false))
    },[url])

    return {
        data, loading
    }
}

export { useFetch }

    // useEffect(() => {
    //     setLoading(true)
    //     fetch(url)
    //     .then(response => response.json())
    //     .then(data => {
    //         // console.log("Data: ", data)
    //         setData(data)
    //     })
    //     .then(() => setLoading(false))
    // }, [])