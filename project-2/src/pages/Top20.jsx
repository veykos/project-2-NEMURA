import React from "react";
import "../App.css";
import Quotes from "../Components/Quotes/Quotes"

export const Top20 = () => {
    return (
        <div>
        <div className="hero">
            <Quotes />
        </div>
        <h1>TOP 20</h1>
        <p>Here you can see Top 20 shows</p>
        </div>
    );
};