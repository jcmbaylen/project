import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { toast } from "react-toastify"

import axiosProduct from "../axiosProduct"

const EditPage = () => {
    let { id } = useParams()
    const navigate = useNavigate()
    const [isLoading, setIsLoding] = useState(false)
    const [product, setProduct] = useState({
        title: "",
        category: "",
        price: "",
        image: ""
    })

    
    useEffect( ()=> {
        const getProduct = async () => {
            setIsLoding(true)
            try {
                const response = await axiosProduct.get(`${id}`)
                setProduct({
                    title: response.data.title,
                    category: response.data.category,
                    price: response.data.price,
                    image: response.data.image
                })
                setIsLoding(false)
            } catch (error) {
                setIsLoding(false)
                toast.error(error.message)
            }
        }

        getProduct()
    }, [id])

    const updateProduct = async (e) => {
        e.preventDefault()
        setIsLoding(true)
        try {
           await axiosProduct.put(`${id}`,product)  
           toast.success(`Update a product ${product.title} successfull`)
            console.log(product)
            navigate("/")
        } catch (error) {
            setIsLoding(false)
            toast.error(error.message)
        }
    }

    return (
        <div className="max-w-lg bg-white shadow-lg mx-auto p-7 rounded mt-6">
            <h2 className="font-semibold text-2xl mb-4 block text-center">
                Update a Product 
            </h2>
            <h4 className="font-semibold mb-4 block text-center">
                <i>{product.title}</i>
            </h4>
            { isLoading ? ("Loading") : (
                <>
                    <form onSubmit={updateProduct}>
                        <div className="space-y-2">
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
                        </div>
                    </form>
                </>
            )}
        </div>
    )
}

export default EditPage