import { useState } from "react"
import axiosProduct from "../axiosProduct"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"

const CreatePage = () => {
    const [title, setTitle] = useState("")
    const [category, setCategory] = useState("")
    const [price, setPrice] = useState("")
    const [imageUrl, setImageUrl] = useState("")
    const [isLoading, setIsLoding] = useState(false)
    const navigate = useNavigate()

    const saveProduct = async (e) => {
        e.preventDefault()
        if (title == "" || category == "" || price == "" || imageUrl == ""){
            alert("fillout completely")
            return
        }

        const payload = {
            title: title,
            category: category,
            price: price,
            image: imageUrl
        }

        try {
            setIsLoding(true)
            const response = await axiosProduct.post('',payload)
            // alert(`Save: ${response.data} successfully`)
            toast.success(`Save ${response.data.title} sucessfully`);
            // console.log(response.data.title)
            // console.log(payload)
            setIsLoding(false)
            navigate("/")
        } catch (error) {
            // console.log(error)
            toast.error(error.message);
            setIsLoding(false)
        }
    }

    return (
        <div className="max-w-lg bg-white shadow-lg mx-auto p-7 rounded mt-6">
            <h2 className="font-semibold text-2xl mb-4 block text-center">
                Create a Product
            </h2>
            <form 
                onSubmit={saveProduct}
            >
                <div className="space-y-2">
                    <div>
                        <label>Title</label>
                        <input type="text" 
                        value={title} onChange={(e) => setTitle(e.target.value)} 
                        className="w-full block border p-3 text-gray-600 rounded focus:outline-none focus:shadow-outline focus:border-blue-200 placeholder-gray-400" placeholder="Enter Title" />
                    </div>
                    <div>
                        <label>Category</label>
                        <input type="text" 
                        value={category} onChange={(e) => setCategory(e.target.value)} 
                        className="w-full block border p-3 text-gray-600 rounded focus:outline-none focus:shadow-outline focus:border-blue-200 placeholder-gray-400" placeholder="Enter Category" />
                    </div>
                    <div>
                        <label>Price</label>
                        <input type="number" 
                        value={price} onChange={(e) => setPrice(e.target.value)} 
                        className="w-full block border p-3 text-gray-600 rounded focus:outline-none focus:shadow-outline focus:border-blue-200 placeholder-gray-400" placeholder="Enter Price" />
                    </div>
                    <div>
                        <label>Image URL</label>
                        <input type="text" 
                        value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} 
                        className="w-full block border p-3 text-gray-600 rounded focus:outline-none focus:shadow-outline focus:border-blue-200 placeholder-gray-400" placeholder="Enter Image URL" />
                    </div>
                    <div>
                        { !isLoading && (
                            <button className="block w-full mt-6 bg-blue-700 text-white rounded-sm px-4 py-2 font-bold hover:bg-blue-600 hover:cursor-pointer">Save</button>
                        )} 
                    </div>
                </div>
            </form>
        </div>
    )
}

export default CreatePage
