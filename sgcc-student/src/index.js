import React from 'react';
import ReactDOM from 'react-dom';


const root = document.getElementById('root')

let test = {
    name:"Malik",
    age:25
}

let template =  (
    <div>
        <p>hello again </p>
        <p>test again</p>
    </div>
   
);

let template2 = (
    <div>
    <p>
        First Para
    </p>
    <h1>
        Header 1
    </h1>
    </div>
)

let Component1 = (props) => {
     
    return(
        <div>
            <p>This is my component {props.name}</p>
            <p>Age: {props.age}</p>
        </div>
    )
}

ReactDOM.render(<Component1 name={test.name} age={test.age}/>,root)


