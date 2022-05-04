import React from "react"
import logo from "../../img/airbnb-clone/airbnb-logo.png"

export default function Navbar() {
    return (
        <nav className="air-bnb-nav">
            <img src={logo} className="nav--logo" alt="airbnblogo"/>
        </nav>
    )
}