import React from "react";

const Card = ({ name }) => {
  return (
    <div>
      <div className="card">
        <div className="card-body">
          <img
            src="https://images.pexels.com/photos/13415959/pexels-photo-13415959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <p>{name}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
