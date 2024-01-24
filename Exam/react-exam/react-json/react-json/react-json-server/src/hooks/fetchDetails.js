import axiosProfile from "./axios-profile"

export const fetchData = async () => {
    try {
        const { data } = await axiosProfile.get('data1/data')

        return data
    } catch (error) {
        console.log(error)
    }
}

export const fetchSchema = async () => {
    try {
        const { data } = await axiosProfile.get('data2/fields')

        return data
    } catch (error) {
        console.log(error)
    }
}

export const fetchCompanies = async () => {
    try {
        const { data } = await axiosProfile.get('data3/data')

        return data
    } catch (error) {
        console.log(error)
    }
}

export const fetchRecords = async () => {
    try {
        const { data } = await axiosProfile.get('data4/record')

        return data
    } catch (error) {
        console.log(error)
    }
}