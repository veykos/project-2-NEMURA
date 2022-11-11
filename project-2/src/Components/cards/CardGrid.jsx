import React, { useEffect, useState } from "react";

import Card from "./Card";
import "./cards.css";
import { Link } from "react-router-dom";
// {shows.length && <div className="headlines">
// <h2 className="titles">Titles</h2>
// </div>}
const CardGrid = ({ shows, isLoading }) => {
  return isLoading ? (
    `loading...`
  ) : (

    <section>
      <div className="headlines" id="headlines" >
                <h2>{shows.length ? "Titles" : null}</h2>
            </div>
    <div className="mul">
    <div className="cards-section">

      {shows.map((show) => {
        return (
          <>
            <Link to={"/CurrentPage/" + show.show.id}>
              <Card key={show.show?.id} show={show} />
            </Link>
          </>
        );
      })}
    </div>
    </div>
    </section>
    
  );
};

export default CardGrid;




