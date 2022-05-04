import React from "react";
import Info from "./digital-business-card/Info.js";
import About from "./digital-business-card/About.js";
import Interests from "./digital-business-card/Interests.js";
import Footer from "./digital-business-card/Footer.js";

import "../styles/DigitalBusinessCard.css"

export default function DigitalBusinessCard(){
    return(
        <div className="container">
            <div className="main">
                <Info/>
                <About/>
                <Interests/>
                <Footer/>
            </div>
        </div>
    )
}