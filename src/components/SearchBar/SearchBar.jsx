import { useState } from "react";
import { FaSearch } from "react-icons/fa"; // Import a search icon from React Icons
import "./SearchBar.css"; // Import a CSS file for styling

function SearchBar({ onSearch }) {
  const [searchValue, setSearchValue] = useState("");

  const handleChange = (event) => {
    setSearchValue(event.target.value);
    //console.log(searchValue);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //console.log(searchValue);
    onSearch(searchValue); // Pass the search term to a parent component or handler
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <button type="submit" className="search-button">
        <FaSearch className="search-icon" />
      </button>
      <input
        type="text"
        placeholder="Search..."
        value={searchValue}
        onChange={handleChange}
        className="search-input"
      />
  
      {/* <button
        type="button"
        className="btn btn-dash"
        onClick={handleResetSearch}
      >
        Reset Search
      </button> */}
    </form>
  );
}

export default SearchBar;
