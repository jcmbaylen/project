import { Link } from "react-router-dom"

const NotFound = () => {
    return (
        <div>
            <h5>404 - This is Not Found</h5>
            <Link to="/">
                <h5>Go back home.</h5>
            </Link>
        </div>
    )
}

export default NotFound