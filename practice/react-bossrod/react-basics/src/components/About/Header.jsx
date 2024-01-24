import React from "react"

const Header = React.memo(({ count }) => {
    console.log("Header is Rendered")

    return (
        <div>
            <h1>This is About Header</h1>
            <h2>The count is: { count }</h2>
        </div>
    )
}, 
// Ito and callback ni React.memo
// if gusto mo icusomized ang state ng component mo na ito
// kapag hindi gumamit ng callback function na to lagi magrrender ang component na to if ginagamit sa About Page ang COUNT STATE

(prev, next) => {

    //kapag nagreturn ako ng TRUE hindi na magrerender
    // return true
    //kapag nagreturn ako ng FALSE magrrender ito nang magrerender
    // if ( prev.count === 5 && next.count === 6 ) {
        console.log("Previous: ",prev)
        console.log("Next", next)
        // return true
    // } else {
    //     return false
    // }
}
) 

Header.displayName = 'Header'   

export default Header

//How to solve the error Component definition is missing display nameeslintreact/display-name
//https://stackoverflow.com/questions/71873909/react-getting-component-definition-is-missing-display-name-error-when-using