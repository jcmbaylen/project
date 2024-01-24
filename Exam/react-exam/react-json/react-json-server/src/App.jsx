import { useEffect, 
    // useState 
} from "react"
// import axiosProfile from "./api/axios-profile"
import axios from "axios"

const App = () => {
    // const [ datas, setdata ] = useState()

    useEffect(() => {
        axios.get('http://localhost:40' + Math.random())
        .then(response => {
        // console.log(response.error.statusCode); // Check the HTTP status code
        console.log(response);
      })
      .catch(error => {
        console.error('Error:', error.response.status); // Access the HTTP status code in the error response
        console.error('Error Data:', error.response.data); // Access the response data
        // Handle the error here
      });
    }, [])
    
    // console.log( datas )
    return (
        <div>
            {/* {data.map((datas) => {
                    <div key={ datas.id } className="flex-1 capitalize">
                        { datas.id }
                    </div>
            })} */}

            {/* {JSON.stringify(datas, null, 4)} */}
        </div>
    )
}

export default App


    // "error": [
    //     { "id": 1, "status": 500, "message": "Internal Server Error" }
    // ],