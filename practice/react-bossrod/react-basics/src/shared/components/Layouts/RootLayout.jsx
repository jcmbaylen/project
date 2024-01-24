import Header from "../Partials/Header"
import Footer from "../Partials/Footer"
import { Link, Outlet } from "react-router-dom"

// const RootLayout = ({ children }) => {
const RootLayout = () => {
    return (
        <div>
            <div style={{ display: 'flex', flexDirection: 'row', gap: '20px' }}>
                <Link to="/" >Home</Link>
                <Link to="/about" >About</Link>
                <Link to="/cars" >Cars</Link>
                <Link to="/state" >State</Link>
                <Link to="/test" >Test</Link>
            </div>
            <Header />
            {/* { children } */}
            <Outlet 
                context={{
                    RootLayoutContext: 'Root Layout Context test'
                }}
            />
            <Footer />
        </div>
    )
}

export default RootLayout