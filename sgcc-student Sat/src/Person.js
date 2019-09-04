import React from 'react';
import NewComponent from './NewComponent';

const Person = ({ title, name, img, age,attributes }) => {
    return (
        <div>
            <h1>{title}</h1>
            <p>{name}</p>
            <p>Age: {age}</p>
            <img src={img} width='150' />
            <ul>
                {
                    attributes.map((elem)=>{
                        return <li key={elem}>{elem}</li>
                    })
                }
            </ul>
            <NewComponent />
        </div>
    )

}

export default Person