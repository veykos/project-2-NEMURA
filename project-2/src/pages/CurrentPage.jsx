import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import "./current.css";

const CurrentPage = () => {
  const params = useParams();
  const [details, setDetails] = useState({});
  const [showImage, setShowImage] = useState([]);

  const fetchDetails = async () => {
    const data = await fetch(`https://api.tvmaze.com/shows/${params.id}`);
    const dataDetail = await data.json();
    setDetails(dataDetail);
  };
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
  }, [params.id]);
  console.log(details, "details");
  console.log(params);
  console.log(showImage);

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
    object-fit: fit;
    height: 600px;
    flex: 1;
    // border: 2px solid yellow;
    border-radius: 10px;
  `;
  const Wraper = styled.section`
    display: flex;
    // margin-top: 400px;
    // background-color: green;
    // width: 100vw;
    padding: 20px;
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
  `;

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
            <strong>Ganre:</strong> <p>{details.genres} </p>
            <strong>language:</strong>
            {details.language}
            <br />
            <strong>network:</strong>
            {/* {details.network} */}
            <br />
            {details.summary}
            {/* <p>{details.rating.average}</p> */}
          </Content>
        </Wraper>
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
