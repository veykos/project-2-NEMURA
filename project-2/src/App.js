
import './App.css';
import React, {useState} from 'react';
import {useEffect} from 'react';
import axios from "axios";
import Search from "./Components/Search.jsx";
import {Navbar} from "./Components/UI/navbar.jsx";
import Footer from './Components/Footer';

function App() {
 
  const handleFetching = async (url, setResp, setLoading) => {
    axios
      .get(url)
      .then((resp) => {
        setResp(resp.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };
  const [shows, setShows] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchInput, setSearchInput] = useState("house");
  const [submitSearch, setSubmitSearch] = useState(false);
  const url = `https://api.tvmaze.com/search/shows?q=${searchInput}`;

  useEffect(() => {
    handleFetching(url, setShows, setIsLoading);
    // const fetchShow = async () => {
    //   const response = await axios(
    //     `https://api.tvmaze.com/search/shows?q=${searchInput}}`
    //   );
    //   setShows(response.data);
    // };
    // fetchShow();
    return () => {
      setSubmitSearch(false);
    };
  }, [submitSearch]);
  console.log(submitSearch, "submitSearch");
  console.log(shows, "shows");

  return (
    <div className="App">
      <header>
        <Navbar/>
      </header>
<div className="hero">
<Search
submitSearch={submitSearch}
setSubmitSearch={setSubmitSearch}
searchInput={searchInput}
setSearchInput={setSearchInput}
/>
</div>

<div className="page-body">
<ul>
{!isLoading &&
shows.map((show) => {
return (
<>
{/* <Card shows={show} /> */}
<li key={show.show.id}>
{/* <img src={show.show?.image?.medium} /> */}
<p>{show.show.name}</p>
<p>{show.show.language}</p>
</li>
</>
);
})}
</ul>
</div>
<Footer/>
</div>
  
  );
}

export default App;
