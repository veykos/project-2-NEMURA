import React from "react";

const Card = ({ shows }) => {
  //console.log(shows.show.network.name)
  return (
    <>
      <div className="card">
        <div className="card-body">
          <div className="cardImg-container">
            <img className="card-img" src={shows.show.image.medium} />
          </div>
          <div className="card-name">
            <h5>{shows.show.name}</h5>
          </div>
        </div>
          <div className="card-info">
          <ul className="list-group list-group-flush">
            <li className="list-group-item">{shows.show.network && shows.show.network.name ? shows.show.network.name : "no network name"}</li>
            <li className="list-group-item">{shows.show.premiered}-{shows.show.ended}</li>
          </ul>
          </div>
        </div>
      
    </>
  );
};

export default Card;
