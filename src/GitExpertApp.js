import React, { useState } from 'react'
import CategoryAdd from './components/CategoryAdd';
import GifGrid from './components/GifGrid';

function GitExpertApp() {

    const [categories, setCategorie] = useState(["Naruto"]);



    return (
        <>
            <h2>GitExpertApp</h2>
            <CategoryAdd setCategorie={setCategorie} />
            <hr />
            <ol>
                {
                    categories.map(category => {
                        return (<GifGrid key={category} category={category} />)
                    })

                }

            </ol>

        </>
    )
}

export default GitExpertApp
