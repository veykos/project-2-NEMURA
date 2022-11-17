import "../App.css";
import "../Components/favourites/favourites.css";
import Quotes from "../Components/Quotes/Quotes";
import CardGrid from "../Components/cards/CardGrid";
import React, { useContet } from "react";
import { GlobalContext } from "../Components/Context/GlobalState";
import { useContext } from "react";

export const MyFavourites = () => {
  const { favourites } = useContext(GlobalContext);
  console.log(favourites, "from the faves page");
  return (
    <div>
      <div className="hero">
        <Quotes />
      </div>
      {favourites.length > 0 ? (
        <CardGrid shows={favourites} />
      ) : (
        <h1 className="nofav">NO FAVOURITE ADDED</h1>
      )}
    </div>
  );
};
