import { Link, useOutletContext } from "react-router-dom"

type Props = {
    test2: string
}

const CarsPage = () =>{
    const { test2 } = useOutletContext<Props>()

    return (
        <div className="CarsPage" style={{ display: "flex",flexDirection: "column", }}>
            <Link to="/cars/add" >Add Car</Link>
            <Link to="/cars/1" >Car 1</Link>
            <Link to="/cars/2" >Car 2</Link>
            <Link to="/cars/3" >Car 3</Link>
            <Link to="/cars/4" >Car 4</Link>
            <Link to="/cars/5" >Car 5</Link>
            <h5>This is Cars Page. The Context is: { test2 }</h5>
        </div>
    )
}

export default CarsPage
