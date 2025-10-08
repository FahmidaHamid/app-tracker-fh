import React, { useState } from "react";
import { FaSearch } from "react-icons/fa"; // Import a search icon from React Icons
import "./SearchBar.css"; // Import a CSS file for styling

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    console.log(searchTerm);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission
    onSearch(searchTerm); // Pass the search term to a parent component or handler
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleChange}
        className="search-input"
      />
      <button type="submit" className="search-button">
        <FaSearch className="search-icon" />
      </button>
    </form>
  );
}

export default SearchBar;
