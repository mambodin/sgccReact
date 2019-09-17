import React, { useState } from 'react'


const Calculator = () => {
    let [count, setCount] = useState(0)
    let [count2, setCount2] = useState(0)
    let row1 = [1,2,3]

    let handleClick = (num) => {
        return () => {
            setCount2(count2 + num)
        }
        
    }
    return (
        <div>
            <h2>{count2}</h2>
            <h1>{count}</h1>
            {
                row1.map((num)=> {
                    return <button key={num} onClick={handleClick(num)}>{num}</button>
                })
            }

            {/* <button onClick={handleClick}>+</button>
            <button onClick={handleClick}>1</button> */}
        </div>
    )
}

export default Calculator