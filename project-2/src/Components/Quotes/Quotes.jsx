import React from "react";
import "./Quotes.css";
import { useEffect, useState } from "react";

const Quotes = () => {
    const [data, setData] = useState({});
    const quoteUrl = "https://movie-quote-api.herokuapp.com/v1/quote/";
  
    const handleFetch = async (url, setResp) => {
      fetch(url)
      .then((resp) => resp.json ())
      .then((data) => setResp(data));
    }
  
    useEffect(() => {
      handleFetch(quoteUrl, setData);
    }, []);

    return (
        <div className="quotes">
            <blockquote>
                {data.quote}
                <span>- {data.role} </span>
                <span> Show: {data.show}</span>
            </blockquote>
        </div>
    )
}

export default Quotes;