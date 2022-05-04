import React from "react";
import {nanoid} from "nanoid";

import Question from "./Question.js";


export default function Trivia(){
        
    const [questions, setQuestions] = React.useState([]);
    

    function setAllQuestions(allQuestions){
        setQuestions(() => {
            
            //parsing data from API into question Objecr and Answer object
            const newQuestions = [];
            
            for(let i = 0; i < allQuestions.length; i++){
                const newQUestions = [];
                
                //Parsing Answers           
                const tempAnswers = [...allQuestions[i].incorrect_answers];
                tempAnswers.push(allQuestions[i].correct_answer);
                
                const answers = tempAnswers.map( el => ({
                    answerId: nanoid(),
                    text: el,
                    correct: el === allQuestions[i].correct_answer ? true : false,
                    selected: false
                }))
                  
                //Parsing Questions                          
                const newQuestion = {
                    questionId: nanoid(),
                    quesiton: allQuestions[i].question,
                    answers: answers
                    
                }
                                
                newQuestions.push(newQuestion);
            }  
            return newQuestions;
        })
    }
    
    
    
    React.useEffect( () => {
        
        //games https://opentdb.com/api.php?amount=5&category=15&difficulty=hard&type=multiple
        //sports https://opentdb.com/api.php?amount=5&category=21&difficulty=medium&type=multiple
        
        fetch("https://opentdb.com/api.php?amount=5&category=21&difficulty=medium&type=multiple")
            .then(response => response.json())
            .then(data => { setAllQuestions(data.results) })  
                    
    },[])
     

    const questionElements = questions.map(el => 
    
        <Question 
            key={el.questionId} 
            text={el.quesiton}
            answers={el.answers} 
        />)

    
    const endGame = false;
    
    return(
        <div>
            <div>
                {questionElements}
            </div>
            
            <div className="check--answers--container">
                {endGame && <h2>Answers correct</h2>}
                {questions.length>0 && <button className="check--answers">Check Answers</button>}
            </div>
        </div>
    )
}