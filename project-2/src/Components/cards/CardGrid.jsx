import React from "react";
import Card from "../Card";
import "./cards.css";

const CardGrid = ({ shows }) => {
  return (
    <div>
      <section className="cards-section">
        {shows.map((show) => {
          return (
            <>
              <Card key={show.show.id} show={show} />
              {/* <Card shows={show} /> */}
              {/* <li key={show.show.id}>
                    <img src={show.show?.image?.medium} />
                    <p>{show.show.name}</p>
                    <p>{show.show.language}</p>
                  </li> */}
            </>
          );
        })}
      </section>
    </div>
  );
};

export default CardGrid;
