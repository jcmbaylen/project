import axios from 'axios'


const axiosPokemon = axios.create({
    baseURL: `${import.meta.env.VITE_API_BASE_URL}`
})

axiosPokemon.interceptors.request.use((config) => {
    return config
})

axiosPokemon.interceptors.response.use((response) => {
    return response
},(error) => {
    throw error
})

export default axiosPokemon


export const fetchPokemon = async (offset) => {
    try {
        const {data} = await axiosPokemon.get(`?offset=${offset}&limit=10`)
        const pokemon = data.results

        return pokemon
    } catch (error) {
        console.log(error)
    }
}