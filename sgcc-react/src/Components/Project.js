import React, { useState, useEffect } from 'react';



// const news = () => {
//     let [news, setNews] = useState([])

//     useEffect(()=>{
//         let data = async () => {
//             let data = await fetch('https://newsapi.org/v2/top-headlines?' +
//                 'country=sg&' +
//                 'apiKey=643ef24572b44968b5a633e48cc5d856')
//             let dataJson = await data.json()

//         }
//     },[])


// // news()

// }




const Project = () => {
    let [newsData, setNewsData] = useState()

    let data = async () => {
        let data = await fetch('https://newsapi.org/v2/top-headlines?' +
            'country=sg&' +
            'apiKey=643ef24572b44968b5a633e48cc5d856')
        let dataJson = await data.json()
        return dataJson

    }


    console.log(newsData)



    return (

        <div>
            <h1>All of today's news</h1>





        </div>


    );
}

export default Project;