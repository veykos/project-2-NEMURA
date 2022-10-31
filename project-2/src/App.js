import "./App.css";
import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Search from "./Components/Search.jsx";
import { Navbar } from "./Components/UI/navbar.jsx";
import Footer from "./Components/Footer";
import Recomended from "./Components/ratingSection/Recomended";
import CardGrid from "./Components/cards/CardGrid";

function App() {
  const handleFetching = async (url, setResp, setLoading) => {
    axios
      .get(url)
      .then((resp) => {
        setResp(resp.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  };
  const [shows, setShows] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchInput, setSearchInput] = useState("house");
  const [submitSearch, setSubmitSearch] = useState(false);
  const url = `https://api.tvmaze.com/search/shows?q=${searchInput}`;

  useEffect(() => {
    handleFetching(url, setShows, setIsLoading);

    return () => {
      setSubmitSearch(false);
    };
  }, [submitSearch]);
  console.log(submitSearch, "submitSearch");
  console.log(shows, "shows");

  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <div className="hero">
        <Search
          submitSearch={submitSearch}
          setSubmitSearch={setSubmitSearch}
          searchInput={searchInput}
          setSearchInput={setSearchInput}
        />
      </div>
      <hr />
      <div className="page-body">
        <CardGrid shows={shows} />
      </div>
      <div>
        <Recomended shows={shows} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
