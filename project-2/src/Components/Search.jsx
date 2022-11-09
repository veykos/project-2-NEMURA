import React from "react";
import { Link } from "react-scroll";

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
        <Link
          className="test6"
          to="section"
          spy={true}
          smooth={true}
          duration={500}
        >
          <button onClick={handelSearch} className="btn btn-primary">
            Search
          </button>
        </Link>
      </form>
    </div>
  );
};

export default Search;
