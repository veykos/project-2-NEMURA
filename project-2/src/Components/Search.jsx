import React from "react";

const Search = () => {
  const displayResult = (e) => {
    e.preventDefault();
    alert("hee");
  };
  return (
    <div>
      <form className="search-form">
        <input type="text" className="search-input" /> <br />
        <button onClick={displayResult} className="btn btn-primary">
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
