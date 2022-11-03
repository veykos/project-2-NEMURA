import "./App.css";
import React, { useState } from "react";
// import { useEffect } from "react";
// import axios from "axios";
import { Home } from "./pages/Home";
import { MyFavourites } from "./pages/MyFavourites";
import { Top20 } from "./pages/Top20";
import { About } from "./pages/About";
// import Search from "./Components/Search.jsx";
import { Navbar } from "./Components/UI/navbar.jsx";
import Footer from "./Components/Footer";
import Recomended from "./Components/ratingSection/Recomended";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
// import CardGrid from "./Components/cards/CardGrid";
// import PeopleGrid from "./Components/cards/PeopleGrid";

function App() {
  
// function renderHTML(APIResponse, AnotherAPIResponse) {
//   document.querySelector("body").innerHTML = `<h1>${APIResponse}: ${AnotherAPIResponse}</h1>`
//   console.log(AnotherAPIResponse[0].person);
// }

//   const handleFetching = async (setLoading) => {
//     // setResp, parantezin icinde yukarda
//     Promise.all(urls.map((url)=> axios.get(url)))
//       .then(axios.spread((...allData)=> {
//         // console.log(resp[0].data);
//         const APIResponse = allData[0].data;
//         // const length= arr1.length;
//         // console.log(length);
//         const AnotherAPIResponse = allData[1].data;
//         // Array.prototype.push.apply(arr1,arr2); 
//         // setResp(allData.map((resp)=>resp.data));
//         // setResp(arr1);
       
//         // && resp[1].data
//         // setResp(resp[1].data);
//         // console.log(arr1);
//         renderHTML(APIResponse, AnotherAPIResponse);
//         setLoading(false);
//       }))
//       .catch((error) => {
//         console.log(error);
//         setIsLoading(false);
//       });
//   };


  // const [people, setPeople] = useState([]);
  // const [shows, setShows] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);
  // const [searchInput, setSearchInput] = useState("house");
  // const [submitSearch, setSubmitSearch] = useState(false);

  // const urls = [`https://api.tvmaze.com/search/shows?q=${searchInput}`, `https://api.tvmaze.com/search/people?q=${searchInput}`];
  // // const promise1 = axios.get(url1);
  // // const promise2 = axios.get(url2);

  //   //1. fetch the movies
  //   async function fetchAll() {
  //     try {
  //       const shows = await axios.get(`https://api.tvmaze.com/search/shows?q=${searchInput}`)
  //       const showsData = shows.data
  //       const people = await axios.get(`https://api.tvmaze.com/search/people?q=${searchInput}`)
  //       const peopleData = people.data
  //       setShows(showsData)
  //       setPeople(peopleData)
  //       setIsLoading(false)
  //       console.log ({showsData}, {peopleData})
  //     } catch (error) {
  //       console.log(error)
  //     }
  //   }

  // useEffect(() => {
  //   // handleFetching(setShows, setIsLoading);
  //   fetchAll();

  //   return () => {
  //     setSubmitSearch(false);
  //   };
  // }, [submitSearch]);
  // console.log(submitSearch, "submitSearch");
  // console.log(shows, "shows");

  return (
    <Router>
    <div className="App">
      <header>
        <Navbar />
      </header>
     
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/my-favourites" element={<MyFavourites/>} />
          <Route path="/top-20-series" element={<Top20/>} />
          <Route path="/about" element={<About/>} />


        </Routes>
      

      {/* <div className="hero">

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
        <PeopleGrid people={people} />
      </div> */}
      {/* <div>
        <Recomended shows={shows} />
      </div> */}
      <Footer />
    </div>
    </Router>
  );
}

export default App;
