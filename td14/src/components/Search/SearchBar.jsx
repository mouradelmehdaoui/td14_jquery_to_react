// components/SearchBar.js
import React from "react";

const SearchBar = ({ onSearch }) => {
  return (
    <div className="input-group rounded w-25 mx-auto">
      <input
        type="search"
        className="form-control rounded"
        placeholder="Search"
        aria-label="Search"
        aria-describedby="search-addon"
        onChange={(e) => onSearch(e.target.value)}
      />
      <span class="input-group-text border-0" id="search-addon">
        <i class="fas fa-search"></i>
      </span>
    </div>
  );
};

export default SearchBar;
