import React, { useState, useEffect } from 'react';
import "../Css/Calculator.css"

const Calculator2 = () => {
    let [display, setDisplay] = useState(0)
    let [inputs, setInputs] = useState(0)


    let buttonPress = (num) => {
        return () => {
            if (inputs === 0) {
                setInputs(num)
            }
            else {
                setInputs(inputs + num)
            }
        }
    }

    let execute = () => {
        // console.log(inputs)
        // console.log(eval(inputs))
        setDisplay(eval(inputs))
        setInputs(0)
    }


    return (
        <div>
            <div className="display">
                <h2>{display}</h2>
                <h1>{inputs}</h1>
            </div>
            <div className="layout">
                <button className="button" onClick={buttonPress("1")}> 1 </button>
                <button className="button" onClick={buttonPress("2")}> 2 </button>
                <button className="button" onClick={buttonPress("3")}> 3 </button>
                <button className="button-operator" onClick={buttonPress("+")}> + </button>
            </div>
            <div className="layout">
                <button className="button" onClick={buttonPress("4")}> 4 </button>
                <button className="button" onClick={buttonPress("5")}> 5 </button>
                <button className="button" onClick={buttonPress("6")}> 6 </button>
                <button className="button-operator" onClick={buttonPress("-")}> - </button>
            </div>
            <div className="layout">
                <button className="button" onClick={buttonPress("7")}> 7 </button>
                <button className="button" onClick={buttonPress("8")}> 8 </button>
                <button className="button" onClick={buttonPress("9")}> 9 </button>
                <button className="button-operator" onClick={buttonPress("/")}> / </button>
            </div>
            <div className="layout">
                <button className="button" onClick={buttonPress("0")}> 0 </button>

                <button className="button" onClick={execute}> = </button>
                <button className="button-operator" onClick={buttonPress("*")}> * </button>
            </div>
            {/* <button onClick={reset}> Reset </button> */}
        </div>
    )

}


export default Calculator2