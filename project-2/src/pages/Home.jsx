import React from "react";
import Search from "../Components/Search.jsx";
import CardGrid from "../Components/cards/CardGrid";
import PeopleGrid from "../Components/cards/PeopleGrid";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import "../App.css";
import ResultsCast from "./results/CastGrid";
import SchedGrid from "../Components/ScheduleComp.jsx/SchedGrid.jsx";

export const Home = () => {
  const [people, setPeople] = useState([]);
  const [shows, setShows] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchInput, setSearchInput] = useState("");
  const [submitSearch, setSubmitSearch] = useState(false);
  //   const urls = [`https://api.tvmaze.com/search/shows?q=${searchInput}`, `https://api.tvmaze.com/search/people?q=${searchInput}`];

  async function fetchAll() {
    try {
      const shows = await axios.get(
        `https://api.tvmaze.com/search/shows?q=${searchInput}`
      );
      const showsData = shows.data;
      const people = await axios.get(
        `https://api.tvmaze.com/search/people?q=${searchInput}`
      );
      const peopleData = people.data;
      setShows(showsData);
      setPeople(peopleData);
      setIsLoading(false);
      console.log({ showsData }, { peopleData });
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchAll();

    return () => {
      setSubmitSearch(false);
    };
  }, [submitSearch]);

  //   console.log(submitSearch, "submitSearch");
  //   console.log(shows, "shows");
  let resultsLength = shows.length+people.length;
  return (
    <div>
      <div className="hero">
        <Search
          submitSearch={submitSearch}
          setSubmitSearch={setSubmitSearch}
          searchInput={searchInput}
          setSearchInput={setSearchInput}
        />
       
      </div>
      <div id="section">
      <div className="page-body">
        <CardGrid shows={shows} />
      </div>
      </div>
      {/* {!resultsLength && <h2 className="headlines" >No results found</h2>} */}
      {searchInput==="" ? null : !resultsLength && <h2 className="headlines" >No results found</h2>}
      {/* for <strong>"{searchInput}"</strong> */}
      <div className="page-body">
        <PeopleGrid people={people} />
      </div>
        {/* <ResultsCast/> */}
      {/* <SchedGrid /> */}
    </div>
  );
};
