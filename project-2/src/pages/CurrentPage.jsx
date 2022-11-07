import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import styled from "styled-components";

import "./current.css";

const CurrentPage = () => {
  const params = useParams();
  const [details, setDetails] = useState({});

  const fetchDetails = async () => {
    const data = await fetch(
      `https://api.tvmaze.com/singlesearch/shows?q=${params.name}`
    );
    const dataDetail = await data.json();
    setDetails(dataDetail);
  };

  useEffect(() => {
    fetchDetails();
  }, [params.name]);
  console.log(details, "details");
  return (
    <>
      <div className="hero"></div>
      <section style={InfoWraper} className="show-info">
        <div className="header">
          <div>
            <img src={details.image?.original} alt="" />
          </div>
          <h1>{details.name}</h1>
          <h2>{details.genres}</h2>
        </div>
      </section>
    </>
  );
};

export default CurrentPage;

const InfoWraper = {
  marginTop: "10rem",
  marginBottom: "5rem",
  display: "flex",
};
