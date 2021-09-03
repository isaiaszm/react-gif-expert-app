import React, { useState } from 'react'
import PropTypes from 'prop-types'


const CategoryAdd = ({ setCategorie }) => {
    const [inputValue, setinputValue] = useState("");

    const handleInputValue = (e) => {
        setinputValue(e.target.value);
    }
    const handleIputSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim().length > 2) {
            setCategorie(cat => [inputValue, ...cat]);
            setinputValue("");
            setCategorie(cat => [inputValue]);

        }


    }

    return (
        <form onSubmit={handleIputSubmit}>

            <input type="text"
                value={inputValue}
                placeholder="search a gif"
                onChange={handleInputValue}
            />

        </form>
    )
}


CategoryAdd.propTypes = {
    setCategorie: PropTypes.func.isRequired,
}


export default CategoryAdd;
