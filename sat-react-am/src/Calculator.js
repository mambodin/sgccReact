import React, {useState} from 'react'




const Calculator = () => {

    let [display, setDisplay] = useState(0)
    let [input, setInput] = useState(0)
    let [errorCode, setError]= useState('')

    
    let buttonPress = (num) => {
            return () => {
            if (input === 0){
                setInput(num)
            } else {
                setInput(input + num)
            }
            
    }
}
    let evaluate = () => {
        try {
            setDisplay(eval(input))
            setInput(0)
            setError()

        }catch (e){
            setError("ERROR!")
            console.log(e)
        }

        

    }
    let cancel = () => {
        let newInput = input.slice(0, -1)
        setInput(newInput)
    }

    return (
    

        <div>
            <p>{input}</p>
            <h1>{display}</h1>
            <button onClick={buttonPress("1")}>1</button>
            <button onClick={buttonPress("2")}>2</button>
            <button onClick={buttonPress("+")}>+</button>
            <button onClick={evaluate}>=</button>
            <button onClick={cancel}>C</button>
            <p>{errorCode}</p>
        </div>

    )
}

export default Calculator
