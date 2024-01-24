
import { useParams, useOutletContext } from 'react-router-dom'

const CarPage = () => {
    const { id } = useParams()
    const { CarsLayoutContext } = useOutletContext()

    return (
        <div className="CarPage">
            <h3>This is CarPage page with an id of { id }</h3>
            <h5>The Context is: { CarsLayoutContext }</h5>
        </div>
    )
}

export default CarPage