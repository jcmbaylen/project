import { useEffect, useState } from "react"
import axiosProduct from "../axiosProduct"
import Product from "../components/Product"
import { Link } from "react-router-dom"

const HomePage = () => {
    const [products, setProducts] = useState([])
    const [isLoading, setIsLoding] = useState(false)

    const getProducts = async () => {
        try {
            setIsLoding(true)
            const response = await axiosProduct.get()
            // console.log(response.data)
            setProducts(response.data)
            setIsLoding(false)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getProducts()
    }, [])

    return (
        <div>
            <div>
                <Link to="/create" className="inline-block mt-4 shadow-md bg-blue-700 text-white rounded-sm px-4 py-2 font-bold hover:bg-blue-600 hover:cursor-pointer">
                    Create a Product
                </Link>
            </div>
            <div>
                {isLoading ? (
                    "Loading..."
                ) : (
                    <div>
                        {products.length > 0 ? (
                            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-5">
                                {products.map((product, index) => {
                                    return (
                                        <Product key={index} product={product} getProducts={getProducts}
                                            setProducts={setProducts} index={index}
                                        />
                                    )
                                })}
                            </div>
                        ) : (
                            <div>
                                There is no product
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    )
}

export default HomePage