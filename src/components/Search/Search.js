import React, {useState} from 'react';

const Search = ({ search }) => {
    const [searchValue, setSearchValue] = useState("");
    
    const handleChange = (event) => {
        setSearchValue(event.target.value);
    }

    const resetSearchField = () => {
        setSearchValue("");
    }

    const callSearchField = (event) => {
        event.preventDefault();
        search(searchValue);
        resetSearchField()
    }

    return(
        <form className="search">
            <input
                value={searchValue}
                placeholder="Search for driver or team..."
                type="text"
                onChange={handleChange}
            />
            <button onClick={callSearchField} type="submit">Search</button>
        </form>
    )
}

export default Search;