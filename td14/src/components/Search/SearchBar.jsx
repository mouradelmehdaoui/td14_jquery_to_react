// components/SearchBar.js
import React from 'react';

const SearchBar = ({ onSearch }) => {
  return (
    <div className="input-group">
      <div className="input-group-prepend">
        <span className="input-group-text" id="basic-addon1">
          Search:
        </span>
      </div>
      <input
        type="text"
        className="form-control"
        placeholder="Search"
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
