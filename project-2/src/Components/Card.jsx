import React from "react";

const Card = ({ shows }) => {
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
          <ul class="list-group list-group-flush">
            <li class="list-group-item">{shows.show.network.name}</li>
            <li class="list-group-item">{shows.show.premiered}-{shows.show.ended}</li>
          </ul>
          </div>
        </div>
      
    </>
  );
};

export default Card;
