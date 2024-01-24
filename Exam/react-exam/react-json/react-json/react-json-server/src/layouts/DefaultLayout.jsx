import Header from "../components/Header"
import Pagination from "../components/Pagination"

const DefaultLayout = () => {
    return (
        <main className="p-4 max-w-[1200px] mx-auto flex flex-col">
            <Header />
            <Pagination />
        </main>
    )
}

export default DefaultLayout