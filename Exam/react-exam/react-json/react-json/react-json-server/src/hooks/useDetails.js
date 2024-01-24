import { useEffect, useState } from "react"

import { fetchCompanies, fetchData, fetchRecords, fetchSchema } from "./fetchDetails"

const useDetails = () => {
    const [ data, setData ] = useState([])
    const [ schema, setSchema ] = useState([])
    const [ companies, setCompanies ] = useState([])
    const [ records, setRecords ] = useState([])

    useEffect(() => {
        const getData = async () => {
            const postData = await fetchData()
            setData(postData)
        }
        getData()
    }, [])


    useEffect(() => {
        const getSchema = async () => {
            const postSchema = await fetchSchema()
            setSchema(postSchema)

        }
        getSchema()
    }, [])

    useEffect(() => {
        const getCompanies = async () => {
            const postCompanies = await fetchCompanies()
            setCompanies(postCompanies)

        }
        getCompanies()
    }, [])

    useEffect(() => {
        const getRecords = async () => {
            const postRecords = await fetchRecords()
            setRecords(postRecords)

        }
        getRecords()
    }, [])

    return { data, schema, companies, records }
}

export  { useDetails }