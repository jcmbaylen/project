import { useEffect, useState } from "react"

type Props = {
    id: number
    title: string
    completed: boolean
}

type FetchType = {
    data:  Props[]
    loading: boolean
}

export const useFetch = ({url}: {url: string}): FetchType => {
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

    // https://bobbyhadz.com/blog/typescript-binding-element-implicitly-has-an-any-type