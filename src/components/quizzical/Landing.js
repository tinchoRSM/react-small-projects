import React from "react";

import blue from "../../img/quizzical/blob_blue.png"
import yellow from "../../img/quizzical/blob_yellow.png"

export default function Landing(props){
    return(
        <div className="landing--container">
            <h1 className="landing--heading">Quizzical</h1>
            <p className="landing--text">Some description if needed</p>
            <button className="landing--button"onClick={props.handleClick}>Start Quiz</button>
            <img id="blue--blob" src={blue} alt="blobs"/>
            <img id="yellow--blob" src={yellow} alt="blobs" />
        </div>
    )
}