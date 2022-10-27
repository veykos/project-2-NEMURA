import React from "react";

const Card = ({ shows }) => {
  return (
    <>
      <div className="card">
        <div className="card-body">
          <div>
            <img className="card-img" src={shows.show.image.medium} />
          </div>
          {/* <p>{shows.show.name}</p> */}
        </div>
      </div>
    </>
  );
};

export default Card;
