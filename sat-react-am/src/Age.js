import React , {useState} from 'react'

let Age = () => {
    let [age, setAge] = useState(2019)
    let ageYearOne = () => {
        setAge(age + 10)
    }

    let ageYearTwo = () => {
        setAge(age - 10)
    }
    return (
        <div>
        <h3>{age}</h3>
        <button onClick={ageYearOne}> Older </button>
        <button onClick={ageYearTwo}> Younger </button>
        </div>
    )
}

export default Age