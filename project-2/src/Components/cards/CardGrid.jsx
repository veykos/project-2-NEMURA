import React, { useEffect, useState, useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";
import AddToFavourite from "../favourites/AddToFavourite";
import Card from "./Card";
import "./cards.css";
// import { Link } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

const CardGrid = ({ shows, isLoading, handleFavoriteClick }) => {
  const { addTitleToFavourits, favourites, removeTitleFromFavourits } =
    useContext(GlobalContext);
  // const addedShow = favourites.find((i) => i.id === show.id);
  // const avoidDuplicate = addedShow ? true : false;

  return isLoading ? (
    `loading...`
  ) : (
    <section>
      <hr></hr>
      <div className="headlines" id="headlines">
        <h2>{shows.length ? "Titles" : null}</h2>
      </div>
      <div className="mul">
        <div className="cards-section">
          {shows.map((show) => {
            return (
              <>
                {/* <Link
                  onClick={() => {
                    window.scroll(0, 0);
                  }}
                  to={"/CurrentPage/" + show.show.id}
                > */}
                <Card
                  addTitleToFavourits={addTitleToFavourits}
                  removeTitleFromFavourits={removeTitleFromFavourits}
                  favourites={favourites}
                  key={show.show?.id}
                  show={show}
                />
                {/* </Link> */}
              </>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CardGrid;
