import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import axiosProfile from "../hooks/axios-profile"
import { toast } from "react-toastify"

import { useProfile } from "../hooks/useProfile"

const EditPage = () => {
    const { id } = useParams()
    // const navigate = useNavigate()
    const { column, profile } = useProfile()
    const [isLoading, setIsLoding] = useState(false)
    const [ cRecord, setCRecord ] = useState([])
    const [ editProfile, setEditProfile] = useState({
        id: "",
        company: "",
        roles: "",
        gender: "",
        fullname: "",
        mobile: "",
        description: ""
    })

    
    useEffect(()=> {
        const getEditProfile = async () => {
            setIsLoding(true)
            try {
                const response = await axiosProfile.get(`data1/data/${id}`)
                setEditProfile({  
                    id: response.data.id,
                    company: response.data.company,
                    roles: response.data.roles,
                    gender: response.data.gender,
                    fullname: response.data.fullname,
                    mobile: response.data.mobile,
                    description: response.data.description
                })
                setIsLoding(false)
            } catch (error) {
                setIsLoding(false)
                toast.error(error.message)
            }
        }


        getEditProfile()
    }, [id])

    // const updateProduct = async (e) => {
    //     e.preventDefault()
    //     setIsLoding(true)
    //     try {
    //        await axiosProduct.put(`${id}`,product)  
    //        toast.success(`Update a product ${product.title} successfull`)
    //         console.log(product)
    //         navigate("/")
    //     } catch (error) {
    //         setIsLoding(false)
    //         toast.error(error.message)
    //     }
    // }

    console.log(editProfile["company"])

    return (
        <div className="max-w-lg bg-white shadow-lg mx-auto p-7 rounded mt-6">
            <h2 className="font-semibold text-2xl mb-4 block text-center">
                Update a Profile 
            </h2>
            <h4 className="font-semibold mb-4 block text-center">
                {/* <i>{product.title}</i> */}
            </h4>
            { isLoading ? ("Loading") : (
                <>
                    <form 
                        // onSubmit={updateProduct}
                    >
                        {/* <div className="space-y-2">
                            <div>
                                <label>Name</label>
                                <input type="text" value={product.title} onChange={(e) => setProduct({...product, title: e.target.value})}  className="w-full block border p-3 text-gray-600 rounded focus:outline-none focus:shadow-outline focus:border-blue-200 placeholder-gray-400" placeholder="Enter Name" />
                            </div>
                            <div>
                                <label>Category</label>
                                <input type="text" value={product.category} onChange={(e) => setProduct({...product, category: e.target.value})}  className="w-full block border p-3 text-gray-600 rounded focus:outline-none focus:shadow-outline focus:border-blue-200 placeholder-gray-400" placeholder="Enter Category" />
                            </div>
                            <div>
                                <label>Price</label>
                                <input type="number" value={product.price} onChange={(e) => setProduct({...product, price: e.target.value})} className="w-full block border p-3 text-gray-600 rounded focus:outline-none focus:shadow-outline focus:border-blue-200 placeholder-gray-400" placeholder="Enter Price" />
                            </div>
                            <div>
                                <label>Image URL</label>
                                <input type="text" value={product.image} onChange={(e) => setProduct({...product, image: e.target.value})}  className="w-full block border p-3 text-gray-600 rounded focus:outline-none focus:shadow-outline focus:border-blue-200 placeholder-gray-400" placeholder="Enter Image URL" />
                            </div>
                            <div>
                                { !isLoading && ( <button className="block w-full mt-6 bg-blue-700 text-white rounded-sm px-4 py-2 font-bold hover:bg-blue-600 hover:cursor-pointer">Update</button>)}         
                            </div>
                        </div> */}


                        {
                            column.map((header, index) => 
                                // header.show_in_listing &&
                                 (
                                <div key={ index }>
                                    <label>{ header.label }</label>




                                    <input 
                                        type={ header.type } 
                                        value={ header.label } 
                                        onChange={(e) => setEditProfile({...editProfile, [header.label]: e.target.value})}  
                                        className="w-full block border p-3 text-gray-600 rounded focus:outline-none focus:shadow-outline focus:border-blue-200 placeholder-gray-400" 
                                        placeholder={ header.label }
                                    />
                                </div>
                            ))
                        }
                        <div>
                            { !isLoading && ( <button className="block w-full mt-6 bg-blue-700 text-white rounded-sm px-4 py-2 font-bold hover:bg-blue-600 hover:cursor-pointer">Update</button>)}         
                        </div>
                    </form>
                </>
            )}
        </div>
    )
}

export default EditPage