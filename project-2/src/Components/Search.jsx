import React from "react";
import { useState, useEffect } from "react";

const Search = ({}) => {
  const [searchInput, setSearchInput] = useState("");

  const displayInput = (e) => {
    setSearchInput(e.target.value);
  };
  const displayResult = (e) => {
    e.preventDefault();
    console.log(searchInput);
  };
  return <div></div>;
};

export default Search;
