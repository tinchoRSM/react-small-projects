import React from "react"
import Navbar from "./react-facts/Navbar.js"
import Main from "./react-facts/Main"

import "../styles/ReactFacts.css"

export default function ReactFacts() {
    
    const [theme,setTheme] = React.useState(false);
    
    function toggleDarkMode(){
        setTheme(theme => !theme)
    }
    
    return (
        <div className="container">
            <Navbar darkMode={theme} toggleDarkMode={toggleDarkMode}/>
            <Main darkMode={theme} />
        </div>
    )
}