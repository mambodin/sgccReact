import React,{useState,useEffect} from 'react'
import './Counter2.css'


const Counter2 = () => {
    let countData = JSON.parse(localStorage.getItem('counter'))
    let [number,setNumber] = useState(countData || 0)



    let addNum = () => {
        setNumber(number += 1)
        console.log(number)
    }

    let minusNum = () => {
        setNumber(number -= 1)
        console.log(number)
    }

    useEffect(()=>{
        localStorage.setItem('counter',JSON.stringify(number))
    })

    return (
        <div className="header">
            <h1 >My Wonderful Counter</h1>
            <h2>
                {number}
            </h2>
            <button onClick={addNum}>Plus One</button>
            <button onClick={minusNum} >Minus One</button>
        </div>
    )
}

export default Counter2