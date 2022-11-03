import React from "react";
import "./Quotes.css";

const Quotes = ({data}) => {
    return (
        <div className="quotes">
            {/* <h1>Quotes</h1> */}
            {/* <div className="quote">
                {data.quote}
            </div>
            <div className="quote-show">
            {data.show}
            </div>
            <div className="quote-role">
            {data.role}
            </div> */}
            <blockquote>
                {data.quote}
                <span>- {data.role} </span>
                <span> Show: {data.show}</span>
            </blockquote>
        </div>
    )
}

export default Quotes;