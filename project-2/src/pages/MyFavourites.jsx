import React from "react";
import "../App.css";
import Quotes from "../Components/Quotes/Quotes"

export const MyFavourites = () => {
    return (
        <div>
        <div className="hero"> 
            <Quotes />
        </div>
            <h1>My favourites</h1>
            <p> Here will be my favourite TV shows displayed</p>
        </div>
        
    );
};