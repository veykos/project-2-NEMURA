import "./App.css";
import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Search from "./Components/Search.jsx";
import { Navbar } from "./Components/UI/navbar.jsx";
import Footer from "./Components/Footer";
import CardGrid from "./Components/cards/CardGrid";

function App() {
  const handleFetching = async (setResp, setLoading) => {
    Promise.all(urls.map((url)=> axios.get(url)))
      .then(axios.spread((...allData)=> {
        // console.log(resp[0].data);
        const arr1 = allData[0].data;
        const length= arr1.length;
        console.log(length);
        const arr2 = allData[1].data;
        Array.prototype.push.apply(arr1,arr2); 
        // setResp(allData.map((resp)=>resp.data));
        setResp(arr1);
       
        // && resp[1].data
        // setResp(resp[1].data);
        console.log(arr1);
        setLoading(false);
      }))
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };
  const [shows, setShows] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchInput, setSearchInput] = useState("house");
  const [submitSearch, setSubmitSearch] = useState(false);

  const urls = [`https://api.tvmaze.com/search/shows?q=${searchInput}`, `https://api.tvmaze.com/search/people?q=${searchInput}`];
  // const promise1 = axios.get(url1);
  // const promise2 = axios.get(url2);

  useEffect(() => {
    handleFetching(setShows, setIsLoading);

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
      <h2>Titles</h2>
      <div className="page-body">
        <CardGrid shows={shows} />
      </div>
      <h2>People</h2>
      <div className="page-body">
        <CardGrid shows={shows} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
