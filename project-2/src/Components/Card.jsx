import React from "react";

const Card = ({ show }) => {
  return (
    <>
      <div className="card">
        <div className="card-body">
          <div className="cardImg-container">
            <img className="card-img" src={show.show?.image?.medium} />
          </div>
          <div className="card-name">
            <h5>{show.show.name}</h5>
          </div>
        </div>
        <div className="card-info">
          <div>
            <p>{show.show.network?.name}</p>
            <p>
              {show.show.premiered}-{show.show.ended}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
