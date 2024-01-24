import { Outlet, useOutletContext } from 'react-router-dom'

type Props = {
    test: string
}

const CarsLayout = () =>{
    const { test } = useOutletContext<Props>()

    return (
        <div className="cars-main">
            <h1>This is from Cars LAYOUT</h1>
            <Outlet 
                context={{
                    test2: 'Cars Layout Context test2'
                }}
            />
            <h5>From The RootLayout Context is: { test }</h5>
            <p>Nagwowork lang si outlet sa children niya, but sa GRAND-CHILD hindi na.</p>
            <p>Vice versa, hindi makukuha ni GRAND-CHILD and outlet ni GRAND-PARENT</p>
            <p>Hindi makukuha ni PARENT OR SIBILNGS ang outlet ng Child OR SIBLINGS nya</p>
            <h1>Cars Footer LAYOUT</h1>
        </div>
    )
}

export default CarsLayout