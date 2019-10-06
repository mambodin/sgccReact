import React, { useState, useEffect } from 'react'
import firebase from './firebase'


const dataSave = (image, title, caption) => {

    firebase.database().ref('react-firebase/' + title).set({
        image: image,
        caption: caption,
        title: title
    })
}

const DataPull = () => {
    let [data, setData] = useState([])

    useEffect(() => {

        firebase.database().ref('react-firebase/').on('value', (snapshot) => {
                let reference = snapshot.val()
                let array = Object.entries(reference)
                setData(array)
                console.log(array)
            })
        
        return () => firebase.database().off()

    }, [])


    return data
}


const PhotoAlbum = () => {
    let [title, setTitle] = useState('')
    let [caption, setCaption] = useState('')
    let [image, setImage] = useState('')


    let data = DataPull()
    // console.log(data)

    let handleTitle = (e) => {
        setTitle(e.target.value)
    }
    let handleImage = (e) => {
        setImage(e.target.value)
    }
    let handleCaption = (e) => {
        setCaption(e.target.value)
    }

    let handleClick = (e) => {
        dataSave(image, title, caption)
    }

    return (
        <div>
            <h1>This is my Photo Album</h1>
            Title: <input onChange={handleTitle}></input>
            Image URL: <input onChange={handleImage}></input>
            Caption: <input onChange={handleCaption}></input>
            <button onClick={handleClick}>Show me the pictures!</button>

            <div>
                {data.map((elem)=>{
                   return( 
                    <div key={elem}>
                    <h1>{elem[1].title}</h1>
                    <img src={elem[1].picture} width="300"/>
                    <p>{elem[1].caption}</p>
                    </div>
                   )
                })}
            </div>
        </div>
    )
}

export default PhotoAlbum