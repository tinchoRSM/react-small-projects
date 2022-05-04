import React from "react"

import Answer from "./Answer.js"

export default function Question(props){
    
    const answersElements = props.answers.map(el => <Answer key={el.answerId} value={el.text} />)
    
    return (
        <div className="question--wrap">
            <h3 className="question--question">{props.text}</h3>
            <div className="question--answers">
                {answersElements}
            </div>
            <hr className="quizzical--hr"/>
        </div>
    )
}