import { Link } from "react-router-dom"

const NotFoundPage = () =>{

    return (
        <div className="NotFoundPage">
            <h5>This URL not found.</h5>
            <Link to="/">
                <h5>Go back home.</h5>
            </Link>
        </div>
    )
}

export default NotFoundPage
