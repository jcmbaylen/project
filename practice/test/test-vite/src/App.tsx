import { Routes, Route } from 'react-router-dom'

import RootLayout from "./shared/components/Layout/RootLayout"
import CarsLayout from "./shared/components/Layout/CarsLayout"
import HomePage from "./pages/Home"
import AboutPage from "./pages/About"
import TestPage from './pages/Test'
import InputPage from './pages/Input'
import CarsPage from "./pages/Cars"
import CarList from "./pages/Car"
import AddCarPage from "./pages/AddCar"
import NotFoundPage from "./pages/NotFound"

const App = () =>{
    return (
        <Routes>
            <Route element={ <RootLayout /> }>
                <Route path="/" element={ <HomePage /> } />
                <Route path="/about" element={ <AboutPage /> } />
                <Route path="/test" element={ <TestPage /> } />
                <Route path="/input" element={ <InputPage /> } />
                <Route element={ <CarsLayout /> }>
                    <Route path="/cars" element={ <CarsPage /> } />
                    <Route path="/cars/:id" element={ <CarList /> } />
                    <Route path="/cars/add" element={ <AddCarPage /> } />
                </Route>
            </Route>
                <Route path="*" element={ <NotFoundPage /> } />
        </Routes>
    )
}

export default App


        // <RootLayout>
        //     <Routes>
        //         <Route path="/" element={ <HomePage /> } />
        //         <Route path="/about" element={ <AboutPage /> } />
        //         <Route path="/cars" element={ <CarsPage /> } />
        //         <Route path="/cars/:id" element={ <CarList /> } />
        //         <Route path="/cars/add" element={ <AddCarPage /> } />
        //         <Route path="*" element={ <NotFoundPage /> } />
        //     </Routes>
        // </RootLayout>
