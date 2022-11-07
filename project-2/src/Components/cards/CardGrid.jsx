import React, { useEffect, useState } from "react";

import Card from "./Card";
import "./cards.css";
import { Link } from "react-router-dom";

const CardGrid = ({ shows, isLoading }) => {
  return isLoading ? (
    `loading...`
  ) : (
    <section className="cards-section">
      {/* <h2>Titles</h2> */}

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
  );
};

export default CardGrid;
