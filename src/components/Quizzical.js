import React from "react";

import Landing from "./quizzical/Landing.js";
import Trivia from "./quizzical/Trivia.js"

import "../styles/Quizzical.css"

export default function Quizzical(){
    
    const [show, setShow] = React.useState(false);
    
    function startQuiz(){
        setShow(show => !show);
    }
    
    return(
        <div className="quizical--main--container">
            {show ? <Trivia /> : <Landing handleClick={startQuiz} />}

        </div>
    )
}