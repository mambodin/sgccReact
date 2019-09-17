import React, { useState, useEffect } from 'react';


const Indecision = () => {
    let [choices, setChoices] = useState([])
    let [input, setInput] = useState('')

    let handleInput = (e) =>{
        setInput(e.value)
        console.log(input)
    }

    let handleChoice = () => {
        setChoices([...choices,input])
    }

    return (
        <div>
        <h1>Let the computer decide!</h1>
            <p>Your Inputs:</p>

            <input  onChange ={handleInput} type= "text"></input>
            <button onClick={handleChoice}>Submit</button>
        </div>

    )
}

export default Indecision;