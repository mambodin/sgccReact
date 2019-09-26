import React, { useState, useEffect } from 'react';
import firebase from './fire'


const DataPull = () => {
    let [data, setData] = useState([])

    useEffect(() => {

        // let firebasePull = async () => {
        //     let snapshot = await firebase.database().ref("react-firebase/").once("value");
        //     let dataRef = snapshot.val();
        //     let dataArray = Object.entries(dataRef)
        //     setData(dataArray)

        // }
        // firebasePull()

        let fireBasePull = firebase.database().ref('react-firebase/').on("value", (snapshot) => {
                let dataRef = snapshot.val()
                let dataArray = Object.entries(dataRef)
                setData(dataArray)
            })
        
        return () => fireBasePull()
    }, [])

    console.log(data)
    return data
}

const DataSave = ({ name, price, image }) => {
    useEffect(() => {
        firebase.database().ref("react-firebase/" + name).set({
            name,
            price,
            image
        })
    })
}

const Inventory = () => {

    let items = DataPull()

    DataSave({name:"malik",image:'http://',price:100})


    return (
        <div>
            <p>Clappity duck</p>
            {
                items.map(d => {
                    return (
                        <div key={d[0]}>
                            <p >{d[1].name}</p>
                            <img src={d[1].image} width="200" />
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