import React from 'react'
import './dice.css'

const Dice = ({rolls,dice, formSubmit, numRoll, diceRoll, modifier, changeModifier,modifierSign, results }) => {
    return (
        <div className='dice'>
            <p>{rolls} D{dice} {modifierSign(modifier)} {Math.abs(modifier)}</p>
            <form onSubmit={formSubmit}>
                <label>Rolling </label>
                <select onChange={diceRoll}>
                    <option value={20} >D20</option>
                    <option value={3} >D3</option>
                    <option value={4} >D4</option>
                    <option value={6} >D6</option>
                    <option value={8} >D8</option>
                    <option value={10} >D10</option>
                    <option value={12} >D12</option>
                    <option value={100} >D100</option>

                </select>
                <label> times </label>
                <select onChange={numRoll}>
                    <option value={1} >1</option>
                    <option value={2} >2</option>
                    <option value={3} >3</option>
                    <option value={4} >4</option>
                    <option value={5} >5</option>
                </select>
                 {modifierSign(modifier)}  
                 <input type='number'  min={-9} value={modifier} onChange={changeModifier}></input>
                
                <button>Roll</button>
                <span>{results}</span>
            </form>



        </div>
    )
}

export default Dice