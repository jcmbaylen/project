import { useState } from "react"
import { useProfile } from "../hooks/useProfile"

import { Profile } from './Profile'

const Pagination = ( ) => {
    const { profile, onRemove, onUpdate } = useProfile()

    const [ currentPage, setCurrentPage ] = useState(1)
    const recordsPerPage = 25
    const lastIndex = currentPage * recordsPerPage
    const firstIndex = lastIndex - recordsPerPage
    const records = profile.slice(firstIndex, lastIndex)
    const npage = Math.ceil(profile.length / recordsPerPage)
    const numbers = [...Array(npage + 1).keys()].slice(1)

    const prevPage = () => {
        // e.preventDafault()
        // if(currentPage !== firstIndex){
        if(currentPage !== 1){
            setCurrentPage(currentPage - 1)
        }
    }

    const changeCurrentPage = (id) => {
        setCurrentPage(id)
    }       

    const nextPage = () => {
        // e.preventDafault()
        // if(currentPage !== lastIndex){
        if(currentPage !== npage){
            setCurrentPage(currentPage + 1)
        }
    }  

    // console.log(numbers)
    console.log(profile)

    return (
        <div>
            { records.map(
                (profile, index) => (
                    <Profile
                        key={ profile.id }
                        // key={ index }
                        profile={ profile }
                        onRemove={ onRemove }
                        onUpdate={ onUpdate }
                        index={ index }
                    />
                )
            ) }
            <div>
                <ul 
                        className="
                            flex
                            justify-between 
                            text-2xl"
                    >
                        <li>
                            <a href="#" className="flex items-center justify-center px-5 py-6 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-1 border-gray-300 rounded-s-lg hover:bg-gray-400 hover:text-gray-100 "
                                onClick={ prevPage }
                            >
                                Previous
                            </a>
                        </li>
                        {
                            numbers.map(( number, index ) => (
                                <li key={ index } >
                                    <a href="#" 
                                        className={`flex items-center justify-center px-5 py-6 h-8 leading-tight text-gray-500
                                            ${ currentPage === number ? 
                                                'text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white' 
                                                : 'bg-white border border-gray-300 hover:bg-gray-400 hover:text-gray-100'}  
                                        `}
                                        onClick={ () => changeCurrentPage(number) }
                                    >
                                        { number }
                                    </a>
                                </li>
                            ))
                        }
                        <li>
                            <a href="#" className="flex items-center justify-center px-5 py-6 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-400 hover:text-gray-100" 
                                onClick={ nextPage }
                            >
                                Next
                            </a>
                        </li>
                    </ul>
            </div>   
        </div>
    )
}

export default Pagination


// dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white
//  dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white hover:text-gray-700
// no boderder end = border-e-0 

// n = 'bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
// n hover = text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white