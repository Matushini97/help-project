import React, {useState, useEffect} from 'react';
import './App.css';
import Die from './Die';
import {nanoid} from 'nanoid'
import Confetti from 'react-confetti'

type NumberArrayType = {
    id: string
    value: number
    isHeld: boolean
}

function App() {

    const allNewDice = () => {
        const newDice = []
        for (let i =0; i < 10; i++) {
            newDice.push({
                id: nanoid(),
                value: Math.ceil(Math.random() * 6),
                isHeld: false

            })
        }
        return newDice
    }

    const [dice, setDice] = useState<NumberArrayType[]>(allNewDice())
    const [tenzies, setTenzies] = useState<boolean>(false)

    useEffect(() => {
        const allHeld = dice.every(die => die.isHeld)
        const firstValue = dice[0].value
        const allSameValue = dice.every(die => die.value === firstValue)
        if (allHeld && allSameValue) {
            setTenzies(true)
            console.log("You won!")
        }
    }, [dice])

    const holdDice = (id: string) => {
        setDice(dice.map(die => {
                   return  die.id === id ?
                       {...die, isHeld: !die.isHeld} :
                       die
                }
            )
        )
    }

    const diceElements = dice.map((die, index) => <Die
                                                    key={die.id}
                                                    value={die.value}
                                                    isHeld={die.isHeld}
                                                    holdDice={() => holdDice(die.id)}
                                                    // holdDice={holdDice}
                                                    id={die.id}
                                                    />)

    function rollDice() {

        if (!tenzies) {
            setDice(dice.map(die => {
                return die.isHeld
                    ?die
                    :{
                        id: nanoid(),
                        value: Math.ceil(Math.random() * 6),
                        isHeld: false
                    }

            }))
        } else {
            setTenzies(false)
            setDice(allNewDice())
        }

    }

    const btnName = tenzies ? 'New Game' : 'Roll'

    return (
        <main className='App'>
            {tenzies && <Confetti/>}
            <h1 className="title">Tenzies</h1>
            <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
            <div className='dieWrapper'>
                {diceElements}
            </div>
            <button className='rollBtn' onClick={rollDice}>{btnName}</button>

        </main>
  );
}

export default App;


// Challenge 1: Create function `allNewDice` that returns [array] of 10 random numbers from 1 to 6. Example: [1,3,6,4,2,1,4,5,3,2]
// Create state for our dice and set its initial state to `allNewDice`
// Render all 10 dice on the page and style them