import React from "react";
// import Modal from "./Modal";
import "./cards.css";
import image from "../../assets/Image_not_available.png";

const CardPeople = ({ people }) => {
  // if (show.show.network || show.show.network.name)  {
  //   `Network: ${show.show.network.name}`|| "not available";


  // }
  return (
    
    <>
      <div className="card">
        <div className="card-image">
            <img className="card-img" alt = "image"  src={people.person?.image ? people.person?.image?.medium : image}/>
            {/* <img className="card-img" src={show.person?.image?.medium } /> */}
            {/* show.show?.image?.medium || show.person?.image?.medium */}
    
        </div>
        <div className="card-info">
            <p>{people.person?.name} </p>
            {/* <p>{show.person?.name}</p> */}
            {/* show.show?.name|| show.person?.name*/}
            <p>{people.person?.gender ?  people.person?.gender==="Male" ? "Actor" : "Actress" : "Actor/Actress"}</p>
        </div>
        
        <div className="card-info">
            <div>
            {/* <p>{show.show.network && show.show.network.name ? show.show.network.name : ""}</p> */}
                <p>
              {/* {show.show.premiered}/{show.show.ended} */}
                </p>
            </div>
        </div>
      </div>
    </>
  );
};

export default CardPeople;