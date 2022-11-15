import React from "react";
import Card from "./Card";
import "./cards.css";
import { HashLink as Link } from "react-router-hash-link";

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
             <Link
                onClick={() => {
                  window.scroll(0, 0);
                }}
                to={"/shows/" + show.show.name + "/"+ show.show.id}
              >
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




