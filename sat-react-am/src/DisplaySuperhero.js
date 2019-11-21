import React from 'react'
import './DisplaySuperhero.css'

let handleClick = (name) => {
     return ()=>console.log(name) 
}

const DisplaySuperhero = (props) => {
    return (
        <div className="superhero">
            <p> Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p> Weight: {props.weight}</p>
            <img src={props.img} width="300" />
            <br/>
            <button onClick={handleClick(props.name)}>Click Me!</button>
        </div>
    )
}

export default DisplaySuperhero