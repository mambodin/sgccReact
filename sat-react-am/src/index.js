import React from 'react';
import ReactDOM from 'react-dom';
import DisplaySuperhero from './DisplaySuperhero'
import Title from './Title';


let root = document.getElementById('root')

let name = "Malik"
 
let dcComics =[ {
    name:"Clarke Kent",
    age: 37,
    weight: 85,
    img:"http://www.slashfilm.com/wp/wp-content/images/superman-action-comics-10000-e1520623702913.jpg"
},
{
    name: "Bruce Wayne",
    age: 37,
    weight: 85,
    img: "https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fimages5.fanpop.com%2Fimage%2Fphotos%2F26800000%2FThe-Dark-Knight-Rises-bruce-wayne-26865596-800-736.jpg&f=1&nofb=1"
}
]

const App = () => {
    return (
    <div>
    <Title
        title={name}
    />
       {
           dcComics.map((elem)=> {
          return <DisplaySuperhero
               name={elem.name}
               age={elem.age}
               weight={elem.weight}
               img={elem.img}
               key={elem.name}
           />
       })
       } 
    </div>
    )
}



ReactDOM.render(<App/>, root);



// let jsx = (
//     <div>
        { name === "" ? <p>No name</p> : <h1>{name}</h1> }

//         <p> Hello World</p>
//     </div>
// )

// let superhero = (
//     <>
//         <p> Name: {superman.name}</p>
//         <p>Age: {superman.age}</p>
//         <p> Weight: {superman.weight}</p>
//     </>
// )