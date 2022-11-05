import React from "react";
import Card from "./Card";
import "./cards.css";

const CardGrid = ({ shows, isLoading }) => {
  return isLoading ? (
    `loading...`
  ) : (
      <section className="cards-section">
        {/* <h2>Titles</h2> */}

        {shows.map((show) => {

          return (
            <>
              <Card key={show.show?.id} show={show} />
            </>
          );
        })}
      </section>
  );
};

export default CardGrid;
