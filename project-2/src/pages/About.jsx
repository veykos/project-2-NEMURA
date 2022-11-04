import React from "react";
import "../App.css";
import Quotes from "../Components/Quotes/Quotes"

export const About = () => {
    return (
    <div>
        <div className="hero">
            <Quotes />
        </div>
        <h1>About us</h1>
        <p>The website is useful for searching TV shows </p>
    </div>
    );
};