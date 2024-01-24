import { Link } from "react-router-dom"
import axiosProduct from "../axiosProduct"
import { toast } from "react-toastify"
import Swal from "sweetalert2"

 
const Product = ({product, getProducts, setProducts, index}) => {

    const deleteProduct = async (id) => {
        // e.preventDefault()
        // alert(id)
        // alert(`import.meta.env.VITE_API_BASE_URL${id}`)
        const result = await Swal.fire({
            title: 'Do you really want to delete the product?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        })
        if(result.isConfirmed){
            try {
                await axiosProduct.delete(`${id}`)
                toast.success("Delete a product successfully")
                setProducts((previousState) =>
                    previousState.filter((_, productIndex) => productIndex !== index)
                )
                // getProducts()    
            } catch (error) {
                toast.error(error.message)
            }
        }
    }

    // const onDelete = async (index) => {
    //     try {
    //         // Assuming you have some identifier like pokemonId
    //         const pokemonIdToDelete = pokemon[index].id;

    //         // Make a DELETE request to the server
    //         await axios.delete(`https://pokeapi.co/api/v2/pokemon/${pokemonIdToDelete}`);

    //         // Update the state after successful deletion
    //         setPokemon((previousState) =>
    //             previousState.filter((_, pokemonIndex) => pokemonIndex !== index)
    //         );
    //     } catch (error) {
    //         console.error('Error deleting Pokemon:', error);
    //         // Handle error or update state accordingly
    //     }
    // };






    return (
        <div className="bg-white rounded shadow-lg overflow-hidden">
            <img src={product.image} className="w-full h-28 object-cover" />
            <div className="px-4 pt-2 pb-4">
                <h2 className="text font-semibold">{product.title}</h2>
                <div className="text-sm">Category: {product.category}</div>
                <div className="text-sm">Price ${product.price}</div>

                <div className="mt-2 flex gap-4">
                    <Link 
                        to={`/edit/${product.id}`} 
                        className="
                            inline-block 
                            w-full 
                            text-center 
                            shadow-md 
                            text-sm 
                            bg-gray-700 
                            text-white 
                            rounded-sm 
                            px-4 py-1 
                            font-bold 
                            hover:bg-gray-600 
                            hover:cursor-pointer
                        "
                    >
                            Edit
                    </Link>
                    <button 
                        onClick={() => deleteProduct(product.id)}  
                        className="
                        inline-block 
                        w-full 
                        text-center 
                        shadow-md 
                        text-sm 
                        bg-red-700 
                        text-white 
                        rounded-sm 
                        px-4 py-1 
                        font-bold 
                        hover:bg-red-600 
                        hover:cursor-pointer
                        "
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Product