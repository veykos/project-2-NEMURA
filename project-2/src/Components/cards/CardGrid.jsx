import React, { useEffect, useState } from "react";

import Card from "./Card";
import "./cards.css";
import { Link } from "react-router-dom";

const CardGrid = ({ shows, isLoading }) => {
  return isLoading ? (
    `loading...`
  ) : (
    <div>
    <h2 className="headlines">{shows.length ? "Titles" : null}</h2>
    <hr></hr>
    <section className="cards-section">

      {shows.map((show) => {
        return (
          <>
            <Link to={"/CurrentPage/" + show.show.name}>
              <Card key={show.show?.id} show={show} />
            </Link>
          </>
        );
      })}
    </section>
    </div>
  );
};

export default CardGrid;



