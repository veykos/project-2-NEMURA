import React from "react";

const AddToFavourite = ({ show, addTitleToFavourits, avoidDuplicate }) => {
  return (
    <div>
      <button
        disabled={avoidDuplicate}
        onClick={() => addTitleToFavourits(show)}
        className=""
      >
        Add to favourites
      </button>
    </div>
  );
};

export default AddToFavourite;
