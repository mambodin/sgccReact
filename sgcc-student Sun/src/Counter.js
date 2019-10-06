import React , {useState,useEffect}from 'react'


const Counter = () => {

    let countData = JSON.parse(localStorage.getItem('counter'))
    let [count, setState] = useState(countData || 0)
    let handleClickPlus = () => {
        setState(count + 1)
    }

    let handleClickMinus = () => {
        setState(count - 1)

    }

    let handleClickReset = () => {
        setState(0)

    }


    useEffect(()=>{
        localStorage.setItem('counter',JSON.stringify(count))
    })

    return (
        <div>
            <p>You clicked {count}</p>
            <button onClick={(handleClickPlus)}> Plus 1</button>
            <button onClick={(handleClickMinus)}> Minus 1</button>
            <button onClick={(handleClickReset)}> Reset </button>
        </div>
    )
}


export default Counter