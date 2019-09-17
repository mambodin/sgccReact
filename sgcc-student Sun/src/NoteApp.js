import React, { useState, useEffect } from 'react'


const NoteApp = () => {
    let dollarData = JSON.parse(localStorage.getItem('dollar'))
    let notesData = JSON.parse(localStorage.getItem('notes'))
    let [title, setTitle] = useState('')
    let [body, setBody] = useState('')
    let [dollar, setDollar] = useState(dollarData || 0)
    let [notes, setNotes] = useState(notesData ||[])

    // let note = {
    //     title: "This is my note",
    //     body: "This is my note body"
    // }

    let handleIncreaseDollar = () => {
        setDollar(dollar + 1)
    }

    let handleTitle = (e) => {
        setTitle(e.target.value)
    }

    let handleBody = (e) => {
        setBody(e.target.value)
    }

    let handleNewNote = () => {
        setNotes([
            ...notes,
            {
                title: title,
                body: body
            }
        ])
        setTitle('')
        setBody('')
    }

    useEffect(() => {
        localStorage.setItem('dollar', JSON.stringify(dollar))
        localStorage.setItem('notes', JSON.stringify(notes))
    })

    return (
        <div>
            {/* <h3>{note.title}</h3>
            <p>{note.body}</p> */}
            <h1>My Note App</h1>

            {
                notes.map((note) => {
                    return (
                        <div key={note.title}>
                        <h3>{note.title}</h3>
                        <p>{note.body}</p>
                        </div>
                    )
                })
            }




            <div>
                <p>Title:</p>
                <input onChange={handleTitle}></input>
                <p>Details:</p>
                <textarea cols="20" rows="10" onChange={handleBody}></textarea>
                <br />

                <button onClick={handleNewNote}>Enter Note</button>
            </div>
            <p>Shrey owes me ${dollar}</p>
            <button onClick={handleIncreaseDollar}>Shrey + $1</button>
        </div>


    )
}

export default NoteApp