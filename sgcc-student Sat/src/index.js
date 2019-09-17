import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import Person from './Person';
import Counter from './Counter'
import Calculator from './Calculator'
import NoteApp from './NoteApp'

let root = document.getElementById('root')




let batman = {
    title: 'Batman',
    name: 'Bruce Wayne',
    age: 35,
    height: "6'2",
    weight: "95kg",
    img: "http://conceptartworld.com/wp-content/uploads/2016/03/Batman_Concept_Art_Illustration_01_Admira_Wijaya_solitude.jpg",
    attributes:[" strength"," agility"," robin"]
}

const App = () => {

    return (
        <Counter />
    )

}



ReactDOM.render(<NoteApp />, root)



// const NewApp = () => {
//     let [count,setCount] = useState(0)
//     let handleCount = (num) => {
//         setCount(count + num)
//     }
//     return (
//         <div>
//         <p> Your count is {count}</p>
//         <button onClick={() => {handleCount(2)}}>This is my button + 2</button>

//         </div>
//     )
// }
