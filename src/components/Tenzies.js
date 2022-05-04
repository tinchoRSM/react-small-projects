import React from "react"
import Die from "./tenzies/Die.js"
import {nanoid} from "nanoid"
import Confetti from "react-confetti"

import "../styles/Tenzies.css"

export default function Tenzies() {

    const [dice, setDice] = React.useState(allNewDice())
    const [tenzies, setTenzies] = React.useState(false)
    
    React.useEffect(() => {
        const allHeld = dice.every(die => die.isHeld)
        const firstValue = dice[0].value
        const allSameValue = dice.every(die => die.value === firstValue)
        if (allHeld && allSameValue) {
            setTenzies(true)
            console.log("You won!")
        }
    }, [dice])

    function generateNewDie() {
        return {
            value: Math.ceil(Math.random() * 6),
            isHeld: false,
            id: nanoid()
        }
    }
    
    function allNewDice() {
        const newDice = []
        for (let i = 0; i < 10; i++) {
            newDice.push(generateNewDie())
        }
        return newDice
    }
    
/**
 * Challenge: Allow the user to play a new game when the
 * button is clicked and they've already won
 */
    
    function rollDice() {
        
        setDice(oldDice => oldDice.map(die => {
            return die.isHeld ? 
                die :
                generateNewDie()
        }))
        
        if(tenzies){
            setDice(allNewDice())
            setTenzies(false)
        }
    }
    
    function holdDice(id) {
        setDice(oldDice => oldDice.map(die => {
            return die.id === id ? 
                {...die, isHeld: !die.isHeld} :
                die
        }))
    }
    
    const diceElements = dice.map(die => (
        <Die 
            key={die.id} 
            value={die.value} 
            isHeld={die.isHeld} 
            holdDice={() => holdDice(die.id)}
        />
    ))
    
    return (
        <div className="tenzies-container">
            <div className="tenzies-main">
                {tenzies && <Confetti />}
                <h1 className="title-tenzies">Tenzies</h1>
                <p className="instructions-tenzies">Roll until all dice are the same. 
                Click each die to freeze it at its current value between rolls.</p>
                <div className="dice-container-tenzies">
                    {diceElements}
                </div>
                <button 
                    className="roll-dice-tenzies" 
                    onClick={rollDice}
                >
                    {tenzies ? "New Game" : "Roll"}
                </button>
            </div>
        </div>
    )
}