import { useParams, useOutletContext } from 'react-router-dom'

type Props = {
    test2: string
}

const CarPage = () =>{
    const { id } = useParams()
    const { test2 } = useOutletContext<Props>()

    return (
        <div className="CarPage">
            <h3>This is CarPage page with an id of { id }</h3>
            <h5>The Context is: { test2 }</h5>
        </div>
    )
}

export default CarPage
