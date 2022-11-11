import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import SelectSeasons from "../Components/SelectSeasons.jsx";
import "./current.css";
import Results from "./results/CastGrid.jsx";

const CurrentPage = () => {
  const params = useParams();
  const [details, setDetails] = useState({});
  const [cast, setCast] = useState([]);
  const [isloading, setIsloading] = useState(true);
  const [seasons, setSeasons] = useState([]);

  const [showImage, setShowImage] = useState([]);

 

  const fetchDetails = async () => {
    const data = await fetch(`https://api.tvmaze.com/shows/${params.id}`);
    const dataDetail = await data.json();
    setDetails(dataDetail);
    // console.log(dataDetail, 'datadetail');

    const ID = dataDetail.id;
    console.log(ID, "ID");

    const dataCast = await fetch(`https://api.tvmaze.com/shows/${ID}?embed=cast`);
    const castInfo = await dataCast.json();
    setCast(castInfo._embedded.cast);
    // console.log(castInfo)

    const dataSeasons = await fetch(`https://api.tvmaze.com/shows/${params.id}/seasons`);
    const seasonDetail = await dataSeasons.json();
    setSeasons(seasonDetail);

    setIsloading(false);
  };

  // const fetchSeansons = async () => {
  //   const dataSeasons = await fetch(`https://api.tvmaze.com/shows/${params.id}/seasons`);
  //   const seasonDetail = await dataSeasons.json();
  //   setSeasons(seasonDetail);
  //   //

  // };

  const fetchImages = async () => {
    const data = await fetch(
      `https://api.tvmaze.com/shows/${params.id}/images`
    );
    const dataDetail = await data.json();
    setShowImage(dataDetail);
  };
  console.log(details);


  useEffect(() => {
       
    fetchDetails();
    fetchImages();
    // fetchSeansons();
    console.log(seasons, "seasons");
  }, [params.id]);
  console.log(details, "details");
  console.log(params);
  console.log(showImage);
  // console.log(seasons, "seasons");

  const background = showImage.filter((image) => {
    return image.type === "background";
  });
  const poster = showImage.filter((image) => {
    return image.type === "poster";
  });
  console.log(background);

  const Hero = styled.div`
    background-image: url(${poster[0]?.resolutions.original.url
      ? poster[0]?.resolutions.original.url
      : showImage[0]?.resolutions.original.url});
    background-size: cover;
    object-fit: cover;
    text-align: center;
    background-repeat: no-repeat;
    background-position: center;
    height: 700px;
    flex: 1;
    // border: 2px solid yellow;
    border-radius: 10px;
    box-shadow: 5px 5px 15px 5px #1d1818;
    // min-width: 100%;
    // overflow: hidden;
  `;
  const Wraper = styled.section`
    display: grid;
    // margin-top: 400px;
    // background-color: green;
    // width: 100vw;
    padding: 20px;
    margin-bottom: 50px;
    justify-content: center;
    grid-template-columns: 35% 50%;
    gap: 2rem;
    align-items: center;
    // grid-area: photo;
  `;

  const Content = styled.div`
    flex: 2;
    margin-left: 20px;
    padding: 20px;
    border: none;
    background-color: #2c2b3c;
    // width: 200px;
    border-radius: 10px;
    opacity: 0.8;
    color: white;
    box-shadow: 5px 5px 15px 5px #1d1818;
    min-height: 700px;
    // width: 300px !important;
    overflow: hidden;
  `;

  const Container = styled.section`
    // background-color: #000;
    // margin-top: 65px;
    background-image: url(${background[0]?.resolutions.original.url
      ? background[0]?.resolutions.original.url
      : showImage[1]?.resolutions.original.url});
    background-size: cover;
    object-fit: fit;
    height: 500px;

    // background-opacity: 0.5;

    padding: 100px;
    box-shadow: 5px 5px 15px 5px #1d1818;
  `;
  const Summary = details.summary;

  return (
    <>
      <div>
        <div className="hero2"></div>
        <Container></Container>
        <Wraper>
          <Hero>
            {/* <img src={showImage[5]?.resolutions.original.url} alt="" /> */}
          </Hero>

          <Content>
            <h1>{details.name}</h1>
            <p>
              <strong>{details?.genres?.length ? "Genres: " : null}</strong>
              {details.genres ? details.genres.join(", ") : null}
            </p>
            <p dangerouslySetInnerHTML={{ __html: Summary }}></p>
            <p>
              <strong>Language: </strong>
              {details.language}
            </p>
            <p>
              <strong>{details.network ? "Network: " : null}</strong>
              {details.network?.name ? details.network.name : null}
            </p>
            <p>
              <strong>{details?.rating?.average ? "Rating: " : null}</strong>
              {details?.rating?.average ? details.rating.average : null}
            </p>
          </Content>
        </Wraper>
        <Results cast={cast}/>
        <SelectSeasons seasons={seasons} id={params.id}/>
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
