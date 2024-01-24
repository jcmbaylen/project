import { HashLink } from "react-router-hash-link"

const Navigations = () => {
    return (
        <header>
            <div>
                <h1>Logo</h1>
            </div>
            <nav>
                <h2>
                    <HashLink to='#home' smooth> Home </HashLink>
                </h2>
                <h2>
                    <HashLink to='#about' smooth> About </HashLink>
                </h2>
                <h2>
                    <HashLink to='#products' smooth> Products </HashLink>
                </h2>
                <h2>
                    <HashLink to='#contact' smooth> Contact Us </HashLink>
                </h2>
            </nav>
        </header>
    )
}

export default Navigations