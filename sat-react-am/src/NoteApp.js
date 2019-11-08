import React, { useState, useEffect } from 'react'
import Notes from './Notes'

// let notes = [
//     {
//         title: "title1",
//         body: "body1"
//     },
//     {
//         title:"title2",
//         body:"body2"
//     }
// ]

const NoteApp = () => {

    let notesData = JSON.parse(localStorage.getItem('notes'))

    let [title, setTitle] = useState('')
    let [body, setBody] = useState('')
    let [notes, setNotes] = useState(notesData || [])

    let titleChange = (e) => {
        setTitle(e.target.value)

    }

    let bodyChange = (e) => {
        setBody(e.target.value)
    }

    let saveNote = () => {
        setNotes([
            ...notes,
            {
                title,
                body
            }
        ])
        setTitle('')
        setBody('')

    }

    useEffect(()=>{
        localStorage.setItem('notes',JSON.stringify(notes))
    })




    return (
        <div>
            Notes Title: <input value ={title} type="text" onChange={titleChange}></input>
            <br />
            Notes Body: <textarea value ={body} onChange={bodyChange}></textarea>
            <button onClick={saveNote}>Save Note</button>
            {
                notes.map((elem,index)=> {
                return <Notes key={index} title={elem.title} body={elem.body} />
                })
            }
                
        </div>
    )
}

export default NoteApp