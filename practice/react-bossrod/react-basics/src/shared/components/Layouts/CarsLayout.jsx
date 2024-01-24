import { Outlet, useOutletContext } from 'react-router-dom'

const CarsLayout = () =>{
    const { RootLayoutContext } = useOutletContext()

    return (
        <div className="cars-main">
            <h1>This is from Cars LAYOUT</h1>
            <Outlet 
                context={{
                    CarsLayoutContext: 'Cars Layout Context test2'
                }}
            />
            <div style={{ background: "gray" }}>
                <h1>This is from CARS LAYOUT</h1>
                <h3>From The RootLayout Context is: { RootLayoutContext }</h3>
                <p>Nagwowork lang si outlet sa children niya, but sa GRAND-CHILD hindi na.</p>
                <p>Vice versa, hindi makukuha ni GRAND-CHILD and outlet ni GRAND-PARENT</p>
                <p>Hindi makukuha ni PARENT OR SIBILNGS ang outlet ng Child OR SIBLINGS nya</p>
                <h1>Cars Footer LAYOUT</h1>
            </div>
        </div>
    )
}

export default CarsLayout