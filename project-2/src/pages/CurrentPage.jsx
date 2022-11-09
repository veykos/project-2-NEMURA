import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import styled from "styled-components";
import "./current.css";
import Results from "./results/CastGrid.jsx";

const CurrentPage = () => {
  const params = useParams();
  const [details, setDetails] = useState({});
  const [cast, setCast] = useState([]);
  const [isloading, setIsloading] = useState(true);


  const fetchDetails = async () => {
    const data = await fetch(
      `https://api.tvmaze.com/singlesearch/shows?q=${params.name}`
    );
    const dataDetail = await data.json();
    setDetails(dataDetail);
    // console.log(dataDetail, 'datadetail');

    const ID = dataDetail.id;
    console.log(ID, "ID");

    const dataCast = await fetch(`https://api.tvmaze.com/shows/${ID}?embed=cast`);
    const castInfo = await dataCast.json();
    setCast(castInfo._embedded.cast);
    // console.log(castInfo)
    setIsloading(false);
    

  };

  //    const ID = details.id;
  //   console.log(ID, "ID");
  // const fetchCast = async () => {
  //   const data = await fetch(
  //     `https://api.tvmaze.com/shows/${ID}?embed=cast`
  //   );
  //   const dataCast = await data.json();
  //   setCast(dataCast);
  //   setIsloading(false);



  // };
  // console.log(cast, 'castdetail');


  useEffect(() => {
     fetchDetails()
      // fetchCast();
  }, [params.name]);
  // console.log(details, "details");
  console.log(cast, "cast");
 
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
        {/* <Results cast={cast}/> */}
      </section>
      <div> 
        <Results cast={cast}/>
      </div>
    </>
  );
};

export default CurrentPage;

const InfoWraper = {
  marginTop: "10rem",
  marginBottom: "5rem",
  display: "flex",
};
