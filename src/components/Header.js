import React from "react"

const Header = ({handleToggleDarkMode}) => {

    

    return(<div className="header">
        <h1>Notes</h1>
        <button onClick={()=> handleToggleDarkMode((previosDarkMode=>!previosDarkMode))} className="toggle" type="button">Toggle Mode</button>

    </div>)

}



export default Header;