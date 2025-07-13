import React from 'react';
import '../Styles/SearchBar.css';

const SearchBar = ({ searchTerm, onSearch }) => {
  return (
    <div className="search-bar mb-4">
      <input
        type="text"
        className="form-control search-bar__input"
        placeholder="Buscar productos..."
        value={searchTerm}
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;

