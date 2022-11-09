import React from "react";

const Search = ({
  searchInput,
  setSearchInput,
  submitSearch,
  setSubmitSearch,
}) => {
  const handelSearch = (e) => {
    e.preventDefault();

    setSubmitSearch(true);
    searchInput = "";
  };

  return (
    <div className="heading">
      
      <form onSubmit={handelSearch} className="search-form">
      <h2 className="headingtext">Unlimited TV shows and much more.</h2>
        <input
          placeholder="Search for TV shows or people..."
          type="text"
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
