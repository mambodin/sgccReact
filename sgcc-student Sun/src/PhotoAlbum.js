import React, { useState, useEffect } from 'react'
import firebase from './firebase'


const ReadData = () => {
    let [data, setData] = useState([])

    useEffect(() => {
        firebase.database().ref('react-sunday/').on('value', (snapshot) => {

            let data = snapshot.val()
            let dataArray = Object.entries(data)
            setData(dataArray)

        })

    }, [])
    console.log(data)
    return data
}

const PhotoAlbum = () => {

    let [title, setTitle] = useState('')
    let [pic, setPic] = useState('')
    let [cap, setCap] = useState('')

    let display = ReadData()

    let handleTitle = (e) => {
        setTitle(e.target.value)

    }
    let handlePic = (e) => {
        setPic(e.target.value)

    }
    let handleCap = (e) => {
        setCap(e.target.value)

    }

    let handleSave = () => {
        firebase.database().ref('react-sunday/' + title).set({
            picture: pic,
            caption: cap,
            title: title
        })
    }

    return (
        <div>
            Title: <input type="text" onChange={handleTitle}></input>
            Picture URL: <input type="text" onChange={handlePic}></input>
            Caption: <input type="text" onChange={handleCap}></input>
            <button onClick={handleSave}>Save My Picture</button>

            {
                display.map((elem)=> {
                    return (
                    <div key={elem[0]}>
                    <h1>{elem[1].title}</h1>
                    <img src={elem[1].picture} width="200" />
                    <p>{elem[1].caption}</p>
                    </div>
                    )
                })
            }

        </div>
    )
}

export default PhotoAlbum