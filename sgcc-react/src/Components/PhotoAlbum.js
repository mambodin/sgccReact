import React, { useState, useEffect } from 'react';
import firebase from './fire'


const DataPull = () => {
    let [data, setData] = useState([])

    useEffect(() => {

        firebase.database().ref('react-firebase/').on("value", (snapshot) => {
            let dataRef = snapshot.val()
            try {
                let dataArray = Object.entries(dataRef)
                setData(dataArray)

            }catch {
                setData([])
            }

        })

        return () => firebase.database().off()
    }, [])

    return data
}

const dataSave = ({ title, picture, caption }) => {

    firebase.database().ref("react-firebase/" + title).set({
        picture,
        caption,
        title
    })

}

const NewEntry = () => {
    let [picture, setPicture] = useState('')
    let [caption, setCaption] = useState('')
    let [title, setTitle] = useState('')

    let handlePicture = (e) => {
        setPicture(e.target.value)

    }

    let handleCaption = (e) => {
        setCaption(e.target.value)

    }

    let handleTitle = (e) => {
        setTitle(e.target.value)

    }

    let handleSubmit = () => {
        let pictureSet = {
            picture,
            caption,
            title
        }
        dataSave(pictureSet)
        setPicture('')
        setCaption('')
    }


    return (
        <div>
            Title: <input type="text" onChange={handleTitle} value={title}></input>
            Picture url: <input type="text" onChange={handlePicture} value={picture}></input>
            Caption: <input type="text" onChange={handleCaption} value={caption}></input>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

const Inventory = () => {

    let items = DataPull()
    // DataSave({ name: "malik", image: 'http://testimage.com', price: 100 })

    return (
        <div>
            <NewEntry />
            {
                items.map(d => {
                    return (
                        <div key={d[0]}>
                            <h2 >{d[1].title}</h2   >
                            <img src={d[1].picture} width="400" />
                            <p>{d[1].caption}</p>
                        </div>
                    )
                })

            }
            <div>

            </div>

        </div>
    )
}


export default Inventory