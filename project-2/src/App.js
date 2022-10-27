import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Card from "./Components/Card";
import Search from "./Components/Search";

function App() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  const displayInput = (e) => {
    setQuery(e.target.value);
  };
  const displayResult = (e) => {
    e.preventDefault();
    fetchShow(url, setData);
  };
  const url = `https://api.tvmaze.com/search/shows?q=${query}`;
  const fetchShow = async (url, setResp) => {
    axios.get(url).then((res) => {
      const obj = res.data[0];
      setResp(obj);
    });
    // console.log(data.show.image.medium);
    console.log(data);
  };
  return (
    <div className="App">
      <div className="hero">
        <form className="search-form">
          <input type="text" onChange={displayInput} className="search-input" />{" "}
          <br />
          <button onClick={displayResult} className="btn btn-primary">
            Search
          </button>
        </form>
      </div>

      <div className="page-body"></div>
    </div>
  );
}

export default App;
