import { useState } from "react"
import AboutHeader from "../components/About/Header"

const AboutPage = () => {
    const [ count, setCount ] = useState(0)

    const handleIncrement = () => {
        setCount( count + 1 )
    }

    console.log("Count: ", count)

    return (
        <div>
            <div>
                <AboutHeader count={ count } />
                <h2>This is About Page</h2>
                <h3>Count: { count }</h3>
                <button onClick={ handleIncrement }>Increment</button>
            </div>
            <div>
                <h1>React.memo</h1>
                <p>Ginagamit din and <b>React.memo</b> performance optimization</p>
                <p>If walang nagbabago sa <b>header or component</b> mas okay na imemoized na lang or icashed dahil UI lang</p>
                <p>Basta kung walang props na pinapasa OR kapag may pina na props o may nagchange dun sa pinasa mo, dun lang siya magrerender</p>
                <p>Kapag walang pinasa na props or change sa props, isang beses lang sya magrerender</p>
            </div>

        </div>
    )
}

export default AboutPage