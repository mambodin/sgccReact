import React, { useState, useEffect } from 'react';
import News from './News'




const Project = () => {

    let [newsData, setNewsData] = useState([])
    let [country, setCountry] = useState('')
    let [query, setQuery] = useState('')
    // let [newsQuery, setNewsQuery] = useState([])


    // let countryChange = (e) => {
    //     setCountry(e.target.value)
    // }

    let queryChange = (e) => {
        setQuery(e.target.value)
    }

    // let submitCountry = () => {
    //     pullData(query)

    // }

    let submitQuery = ()=> {
        setQuery('')
        pullData(query)
    }

    let pullData = async (q) => {
        let data = await fetch('https://newsapi.org/v2/everything?' +
            `q=${q}&` +
            'apiKey=643ef24572b44968b5a633e48cc5d856')
        let dataJson = await data.json()
        setNewsData(dataJson.articles)

    }

    let pullHeadlines = async () => {
        let data = await fetch('https://newsapi.org/v2/top-headlines?' +
            `country=sg&` +
            'apiKey=643ef24572b44968b5a633e48cc5d856')
        let dataJson = await data.json()
        setNewsData(dataJson.articles)
    }


    useEffect(() => {
        pullHeadlines()

        console.log("run")
    }, [])



    return (

        <div>
            <h1>All of today's news</h1>
            Search: <input type="text" onChange={queryChange} value={query}></input>
            <button onClick={submitQuery}>Search</button>
            {
                newsData.map((news) => {
                    return (
                        <News title={news.title}
                            description={news.description}
                            key={news.title}
                            urlToImage={news.urlToImage}
                            url={news.url}
                        />
                    )
                })

            }
        </div>


    );
}

export default Project;