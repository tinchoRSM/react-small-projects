import React from "react";
import EmailButton from "../../img/digital-business-card/EmailButton.js";
import LinkedInButton from "../../img/digital-business-card/LinkedInButton.js";

export default function Info(){
    return (
        <div className="info--main">
            <img className="info--image" src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Person_Image"/>
            <h1 className="info--name">Djulia Borisova</h1>
            <p className="info--position">Front end developer</p>
            <p className="info--text">julie_maruli@gmail.com</p>
            <div className="info--buttons">
                <EmailButton className="info--button"/>
                <LinkedInButton className="info--button"/>
            </div>
        </div>
    )
}