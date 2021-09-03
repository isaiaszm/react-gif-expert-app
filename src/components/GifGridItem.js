import React from 'react';
import "../index.css";

const GifGridItem = ({ id, title, url }) => {
    return (
        <>



            < img key={id} src={url} alt={title} />




        </>
    )
}

export default GifGridItem
