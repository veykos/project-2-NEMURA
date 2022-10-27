import React from "react";
import { useState, useEffect } from "react";

const Search = ({
  searchInput,
  setSearchInput,
  submitSearch,
  setSubmitSearch,
}) => {
  const handelSearch = (e) => {
    e.preventDefault();
    setSubmitSearch(true);
  };

  return (
    <div>
      <form onSubmit={handelSearch} className="search-form">
        <input
          type="text"
          // value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
          className="search-input"
        />
        <br />
        <button onClick={handelSearch} className="btn btn-primary">
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
