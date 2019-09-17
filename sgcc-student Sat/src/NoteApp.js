import React, { useState, useEffect } from 'react'


const NoteApp = () => {

    let notesData = JSON.parse(localStorage.getItem('notes'))
    let [title, setTitle] = useState('')
    let [detail, setDetail] = useState('')
    let [notes, setNotes] = useState(notesData || [])

    let handleTitleChange = (e) => {
        setTitle(e.target.value)

    }

    let handleDetChange = (e) => {
        setDetail(e.target.value)
        console.log(detail)
    }

    let handleClick = () => {
        setNotes([
            ...notes,
            {
                title,
                detail
            }
        ])
    }
    let removeNote = () => {
        
    }

    useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(notes))
    })

    return (
        <div>
            <h1>My Notes</h1>

            {
                notes.map((note) => {
                    return (
                        <div key={note.title}>
                            <h3>{note.title}</h3>
                            <p>{note.detail}</p>
                            <button onClick={removeNote}></button>
                        </div>
                    )
                })
            }

            <p>Title</p>
            <input onChange={handleTitleChange}></input>
            <p>Details</p>
            <textarea cols="22" rows="10" onChange={handleDetChange}></textarea>
            <br />
            <button onClick={handleClick}>Add Note</button>
        </div>
    )
}


export default NoteApp