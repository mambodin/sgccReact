import React, { useState, useEffect } from 'react';
import Dice from './Dice'
import DiceSound from './dice.mp3'
import useSound from 'use-sound'
import './DnDDice.css'



const DnDDice = () => {

    let [dice, setDice] = useState(20)
    let [rolls, setRolls] = useState(1)
    let [results, setResults] = useState('')
    let [modifier, setModifier] = useState(0)
    let [playDiceSound] = useSound(DiceSound)
    let [logs, setLogs] = useState([])

    // console.log(DiceSound)


    let rolling = (diceValue, times, modifier) => {
        let total = 0
        let roll
        let result = []
        for (let i = 0; i < times; i++) {
            roll = Math.floor(Math.random() * diceValue) + 1
            total += roll
            result.push(roll)
        }

        let resultFinal = total + Number(modifier)
        let statement = ' You Rolled: ' + times + 'D' + diceValue + ', ' + String(result) + modifierSign(modifier) + Math.abs(modifier) + ' : ' + resultFinal

        setLogs([...logs, statement])
        console.log(typeof (modifier))
        return resultFinal
    }





    let modifierSign = (modifier) => {
        if (modifier >= 0) {
            return ' + '
        }
        else {
            return ' - '
        }
    }


    let formSubmit = (e) => {
        e.preventDefault()
        console.log(`Rolling between ${dice}, ${rolls} times`)

        setResults(rolling(dice, rolls, modifier))
        playDiceSound()

    }


    let diceRoll = (e) => {
        setDice(e.target.value)
    }

    let numRoll = (e) => {
        setRolls(e.target.value)
    }

    let changeModifier = (e) => {
        setModifier(e.target.value)

    }

    useEffect(() => {

        console.log(logs)
    }, [logs])

    return (


        <div className="mainApp">
            <div className="title">
                <h2>Dice Rollerz</h2>
            </div>
            <div className="diceArea">

                    <Dice
                        rolls={rolls}
                        dice={dice}
                        formSubmit={formSubmit}
                        numRoll={numRoll}
                        diceRoll={diceRoll}
                        modifier={modifier}
                        changeModifier={changeModifier}
                        modifierSign={modifierSign}
                        results={results}

                    />

            </div>

            <div className="logs">
                <h2>Your rolls</h2>
                {/* {console.log(logs)} */}
                {logs.length === 0 ? '' : logs.map(elem => <p>{elem}</p>)}
            </div>


        </div>
    )
}

export default DnDDice


