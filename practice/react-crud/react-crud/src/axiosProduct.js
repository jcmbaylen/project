import axios from 'axios'

const axiosProduct = axios.create({
    baseURL: `${import.meta.env.VITE_API_BASE_URL}`
})

axiosProduct.interceptors.request.use((config) => {
    return config
    // return {
    //     ...config,
    //     data: {
    //     message: "Mocked response",
    //     },
    //     status: 200,
    //     statusText: "OK",
    // };
})

axiosProduct.interceptors.response.use((response) => {
    return response
    // return {
    //     ...response,
    //     data: {
    //     message: "Mocked response",
    //     },
    //     status: 200,
    //     statusText: "OK",
    // };
}, (error) => {
    console.log(error)

    throw error
})

export default axiosProduct