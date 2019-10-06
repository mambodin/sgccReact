import React from 'react';


const Note = ({title,body}) => {
    return (
        <>
        <h3>{title}</h3>
        <p>{body}</p>
        </>
    )
}

export default Note