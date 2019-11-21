import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import Person from './Person';
import Calculator from './Calculator'
import Counter from './Counter'
import NoteApp from './NoteApp'
import Indecision from './Indecison'
import PhotoAlbum from './PhotoAlbum'


let root = document.getElementById('root')

let jsx = (
    <div>
        <p>This is my div</p>
    </div>
)

let superhero = [{
    title: 'Batman',
    name: 'Bruce Wayne',
    age: 35,
    height: "6'2",
    weight: "95kg",
    img: "http://conceptartworld.com/wp-content/uploads/2016/03/Batman_Concept_Art_Illustration_01_Admira_Wijaya_solitude.jpg",
    attributes:[" strength"," agility"," robin"]
}
, {
    title: 'Superman',
    name: 'Clarke Kent',
    age: 33,
    height: "6'2",
    weight: "95kg",
    img: "https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fclipart.info%2Fimages%2Fccovers%2F1516943360Superman-cartoon-png-classic.png&f=1",
    attributes: [" strength", " agility", " speed"]
}]


// let Counter = () =>{
//     let [times,setTimes] = useState(0)
//     let handleClick = () => {
//         setTimes(times + 1)
//     }
//     return (
//         <div>
//         <p>You clicked {times}</p>
//         <button onClick={handleClick}>Plus 1</button>
//         </div>
//     )
// }


const App = () => {
    return(
        <div>


        {
            superhero.map((hero) => {
            return (<Person
                title={hero.title}
                name={hero.name}
                age={hero.age}
                img={hero.img}
                attributes={hero.attributes}
        />)}
        )
        }
        </div>
    )
}

ReactDOM.render(jsx , root)


