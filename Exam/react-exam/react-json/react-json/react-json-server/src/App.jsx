import { Route, Routes } from "react-router-dom"

import DefaultLayout from "./layouts/DefaultLayout"
import EditPage from "./pages/EditPage"

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const App = () => {
    return (
        <>
            <Routes>
                <Route index element={ <DefaultLayout /> } />
                <Route path="/edit/:id" element={ <EditPage /> } />
            </Routes>
            <ToastContainer/>
        </>
    )
}

export default App