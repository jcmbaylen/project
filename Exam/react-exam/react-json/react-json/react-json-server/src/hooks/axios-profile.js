import axios from 'axios'

const axiosProfile = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL
})

axiosProfile.interceptors.request.use(( config ) => {
    return config
})

axiosProfile.interceptors.response.use(( response ) => {
    return response
}, ( error ) => {
    const { response } = error.response

    if( response.status === 500 ) {
        console.log("Internal Server Error")
    }

    throw error
})

export default axiosProfile