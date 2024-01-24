import { Link, Outlet } from 'react-router-dom'

import Header from '../Partials/Header'
import Footer from '../Partials/Footer'

const RootLayout = () =>{
    return (
        <div className="root-main">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/cars">Cars</Link>
            <Link to="/test">Test</Link>
            <Link to="/input" >Input</Link>
            <Header />
            <Outlet 
                context={{
                    test: 'Root Layout Context test'
                }}
            />
            <Footer />
        </div>
    )
}

export default RootLayout

// hindi na din kakailanganin ngprops

// type Props = {
//     children?: React.ReactNode
// }

// const RootLayout: React.FC<Props> = () =>{

// tatanggalin ang props na children at magiging outlet na lang, na nilagay sa loob ng rout ang children ni root layout

// const RootLayout: React.FC<Props> = ({ children }) =>{

//     return (
//         <div className="root-main">
//             <Link to="/">Home</Link>
//             <Link to="/about">About</Link>
//             <Link to="/cars">Cars</Link>

//             <Header/>
//                 { children }
//             <Footer/>
//         </div>
//     )
// }