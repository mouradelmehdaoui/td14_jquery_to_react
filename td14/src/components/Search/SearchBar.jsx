import React from "react";

/**
 * SearchBar component provides a search input for filtering data.
 *
 * @component
 * @param {Object} props - Component props.
 * @param {Function} props.onSearch - Callback function triggered on search input change.
 * @returns {JSX.Element} React component
 */
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
      <span className="input-group-text border-0" id="search-addon">
        <i className="fas fa-search"></i>
      </span>
    </div>
  );
};

export default SearchBar;
