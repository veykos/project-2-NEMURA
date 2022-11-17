import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";
import "./favourites.css";

function AddOrRemove({ show, type, avoidDuplicate }) {
  const { removeTitleFromFavourits, addTitleToFavourits } =
    useContext(GlobalContext);

  return (
    <div>
      <button onClick={removeTitleFromFavourits(show.id)}>Remove</button>

      <button
        onClick={() => addTitleToFavourits(show)}
        disabled={avoidDuplicate}
        className="addbtn"
      >
        add
      </button>
    </div>
  );
}

export default AddOrRemove;
