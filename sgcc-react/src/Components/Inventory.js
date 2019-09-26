import React, { useState, useEffect } from 'react';
import firebase from './fire'


const Inventory = () => {
    let [data, setData] = useState([])

    let readData = async () => {
        let snapshot = await firebase.database().ref("items/").once("value");
        let dataRef = snapshot.val();
        let dataArray = Object.entries(dataRef)
        // localStorage.setItem('items', JSON.stringify(dataRef))
        setData(dataArray)
    }


    useEffect(() => {
        readData()
        // let myData = readData()
        // return () => readData()
    }, [])

    return (
        <div>
            <p>Clappity duck</p>
            {
                data.map(d => {
                    return (
                        <div key={d[0]}>
                        <p >{d[1].name}</p>
                            <img src={ d[1].image } width ="200"/>
                        </div>
                    )
                })

            }

        </div>
    )
}


export default Inventory