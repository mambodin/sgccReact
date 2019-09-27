import React, {useState, useEffect} from 'react';


const Indecision = () => {

    let [input, setInput] = useState('')
    let[decisions, setDecisions] = useState([])
    let[outcome, setOutcome] = useState('')

    let handleInput = (e) => {
        setInput(e.target.value)
        console.log(e.target.value)

    }

    let saveInput = () => {
        setDecisions([...decisions,input])
        
    }

    let makeDecision = () => {
       let index = Math.floor(Math.random() * decisions.length)
        setOutcome(decisions[index])
    }

    return (
        <div>

            <h1>Let the computer decide!</h1>
            <ul>
            {
                decisions.map((elem)=>{
                    return <li key={elem}>{elem}</li>
                })
            }
            </ul>
            <p>Input your decision</p>
            <input type="text" onChange={handleInput}></input>
            <button onClick={saveInput}>Submit</button>
            <button onClick={makeDecision}>Make my Decision</button>
            <h3>{outcome}</h3>
        </div>

    )


}

export default Indecision