import About from "./components/About"
import Contact from "./components/Contact"
import Home from "./components/Home"
import Navigations from "./components/Navigations"
import Products from "./components/Products"

const App = () => {
    return (
        <div>
            <Navigations />
            <Home />
            <About />
            <Products />
            <Contact />
        </div>
    )
}

export default App