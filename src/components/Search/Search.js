import React from 'react';

const Search = ({ search, handleChange }) => {

    return(
        <form className="search">
            <input
                value={search}
                placeholder="Search for driver or team..."
                type="text"
                onChange={handleChange}
            />
            <button onClick={handleChange} type="submit">Search</button>
        </form>
    )
}

export default Search;