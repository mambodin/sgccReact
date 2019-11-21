import React, {useState, useEffect} from 'react'


const Counter = () => {

    let counterData = JSON.parse(localStorage.getItem('counter'))
    let [counter, setCounter] = useState(counterData || 0)



    let plusOne = () => {
        setCounter(counter + 1)
        console.log(counter)
    }

    let minusOne = ()=>{

        setCounter(counter - 1)
        console.log(counter)
    }

    useEffect(() => {

        localStorage.setItem('counter', JSON.stringify(counter))
        console.log("useEffect ran")
    })

   

    return (
        <div>
        <h2>{counter}</h2>
            <button onClick={plusOne}> + 1</button>
            <button onClick={minusOne}> - 1 </button>
       
        </div>
    )
}

export default Counter