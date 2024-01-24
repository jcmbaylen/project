import { Routes, Route } from "react-router-dom"

import RootLayout from "./shared/components/Layouts/RootLayout"
import CarsLayout from "./shared/components/Layouts/CarsLayout"

import HomePage from "./pages/Home"
import AboutPage from "./pages/About"
import CarsPage from "./pages/Cars"
import CarPage from "./pages/Car"
import AddCarPage from "./pages/AddCar"
import NotFoundPage from "./pages/NotFound"
import StatePage from "./pages/State"
import TestPage from "./pages/Test"

const App = () => {
    return (
        // <RootLayout>
        //     <Routes>
        //         <Route path="/" element={ <HomePage /> } />
        //         <Route path="/about" element={ <AboutPage /> } />
        //         <Route path="/cars" element={ <CarsPage /> } />
        //         <Route path="/cars/:id" element={ <CarPage /> } />
        //         <Route path="/cars/add" element={ <AddCarPage /> } />
        //         <Route path="*" element={ <NotFoundPage /> } />
        //     </Routes>
        // </RootLayout>
        <Routes>
            <Route element={ <RootLayout /> }>
                <Route path="/" element={ <HomePage /> } />
                <Route path="/about" element={ <AboutPage /> } />
                <Route path="/state" element={ <StatePage /> } />
                <Route path="/test" element={ <TestPage /> } />
                <Route element={ <CarsLayout /> }>
                    <Route path="/cars" element={ <CarsPage /> } />
                    <Route path="/cars/:id" element={ <CarPage /> } />
                    <Route path="/cars/add" element={ <AddCarPage /> } />
                </Route>
            </Route>
            <Route path="*" element={ <NotFoundPage /> } />
        </Routes>
    )
}

export default App