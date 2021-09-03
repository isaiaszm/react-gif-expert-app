import React from 'react'
import useFetchGifs from '../hooks/useFetchGifs'
import GifGridItem from './GifGridItem';

const GifGrid = ({ category }) => {

    const { data: images, loading } = useFetchGifs(category);



    return (
        <div>
            <h3>{category}</h3>
            {loading && <p className=" animate__animated animate__flash animate__infinite	infinite">Loading...</p>}
            <div className="_container__grid__imgs animate__animated animate__fadeInUp animate__delay-2s">

                {
                    images.map(img => {
                        return (

                            <GifGridItem key={img.id}
                                {...img}
                            />


                        )

                    })
                }
            </div>


        </div>
    )
}

export default GifGrid
