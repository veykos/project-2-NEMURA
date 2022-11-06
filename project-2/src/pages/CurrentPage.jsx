import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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

    console.error("somthing is wrong");
  };

  useEffect(() => {
    fetchDetails();
  }, [params.name]);
  console.log(details.image, "details");
  return (
    <>
      <div className="hero"></div>
      <section style={InfoWraper} className="show-info">
        <div className="header">
          <div>{/* <img src={details} alt="" /> */}</div>
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
