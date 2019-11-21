import React from 'react';

const News = ({ title, description,urlToImage, url }) => {
    return (
        <div>
            <h3>{title}</h3>
            <img src={urlToImage} width="300"/>
            <p>{description}</p>
            <p><a href={url}>Read more...</a></p>
        </div>
    )
}

export default News