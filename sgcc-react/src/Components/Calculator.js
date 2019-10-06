import React, { useState, useEffect } from 'react';


const Calculator = () => {
    let [value, setValue] = useState(0)
    let [inputs, setInputs] = useState(0)



    let displayCombine = (current, number) => {
        let display = [current, number]
        return display.join("")
    }

    let inputCombine = (operator) => {
        return () => {
            switch (operator) {
                case ("+"):
                    setInputs(inputs + value)
                    setValue(0)
                    break
                case ("-"):
                    setInputs(inputs - value)
                    setValue(0)
                    break
                case ("/"):
                    setInputs(inputs / value)
                    setValue(0)
                    break
                case ("*"):
                    if (inputs === 0) {
                        setInputs(value *1)
                        setValue(0)
                    }
                    else {
                        console.log(inputs)
                        setInputs(inputs * value)
                        setValue(0)
                    }
                    break
                case("="):
                    
            }


            //     if (inputs[0] === 0) {
            //         inputs[0] = Number(value)
            //         // inputs.push(operator)
            //         setInputs(inputs)
            //     } else {
            //         inputs[0] = (Number(value))
            //         // inputs.push(operator)

            //         setInputs(inputs+ value)
            //         setValue(0)
            //     }
            //     setValue(0)
            // }

        }
    }

    let buttonPress = (val) => {
        return () => {
            value === 0 ? setValue(val) : setValue(displayCombine(value, val))

        }

    }


    // let operation = () => {
    //     inputs.reduce((curr, next) => {
    //         let total = 0
    //         if (isNaN(curr)) {
    //             console.log("Current", curr)
    //             return 0
    //         }
    //         else if (isNaN(next)) {
    //             console.log("Next", next)
    //             return total + next
    //         }
    //         console.log(total)
    //     })
    // }

    let reset = () => {
        setValue(0)
        setInputs(0)
    }




    return (
        <>
            <h2>{inputs}</h2>
            <h1>{value}</h1>
            <button onClick={buttonPress(1)}> 1 </button>
            <button onClick={buttonPress(2)}> 2 </button>
            {/* <button onClick={buttonPress(3)}> 3 </button>
            <button onClick={buttonPress(4)}> 4 </button>
            <button onClick={buttonPress(5)}> 5 </button>
            <button onClick={buttonPress(6)}> 6 </button>
            <button onClick={buttonPress(7)}> 7 </button>
            <button onClick={buttonPress(8)}> 8 </button>
            <button onClick={buttonPress(9)}> 9 </button>
            <button onClick={buttonPress(0)}> 0 </button> */}
            <button onClick={inputCombine("+")}> + </button>
            <button onClick={inputCombine("-")}> - </button>
            <button onClick={inputCombine("/")}> / </button>
            <button onClick={inputCombine("*")}> * </button>
            <button onClick={inputCombine("=")}> = </button>
            <button onClick={reset}> Reset </button>
        </>
    )

}


export default Calculator