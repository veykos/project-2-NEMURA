import React from "react";
import "./cards.css";

const Card = ({ show }) => {
  const ratingConditional = (rating) => {
    if (rating <= 2) {
      return "⭐️";
    }
    if (rating > 2 && rating <= 4) {
      return "⭐️ ⭐️";
    }
    if (rating > 4 && rating <= 6) {
      return "⭐️ ⭐️ ⭐️";
    }
    if (rating > 6 && rating <= 8) {
      return "⭐️ ⭐️ ⭐️ ⭐️";
    }
    if (rating > 8 && rating <= 10) {
      return "⭐️ ⭐️ ⭐️ ⭐️ ⭐️";
    } else {
      return "---";
    }
  };
  console.log(show.show.rating.average);
  return (
    <>
      <div className="card">
        <div className="card-image">
          <img className="card-img" src={show.show?.image?.medium} />
        </div>
        <div className="card-info">
          <p>{show.show.name}</p>
          <p>
            <strong>Network: </strong>
            {show.show.network?.name}
          </p>
          <p>
            <strong> </strong>
            {ratingConditional(Math.round(show.show.rating.average))}
          </p>
          {/* <p>
            {show.show.premiered}-{show.show.ended}
          </p> */}
        </div>
      </div>
    </>
  );
};

export default Card;
