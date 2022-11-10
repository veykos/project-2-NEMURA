import React from "react";
import "../App.css";
import Quotes from "../Components/Quotes/Quotes"
import axios from "axios"
import { useMemo, useEffect, useState } from "react";
import Table from "./Table";



export const Top20 = () => {
    const [top, setTop] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    const urlTop = 'https://api.tvmaze.com/shows'
    
    const fetchWithAxios = async (urlTop, setTop) => {
        axios
          .get(urlTop)
          .then((res) => setTop(res.data
            .filter(ele => ele.rating.average > 8)
            .sort((a,b) => b.rating.average - a.rating.average)
            .slice(0, 50)
          ))
          .catch((e) => console.log(e));
      };
    
    useEffect(() => {
        fetchWithAxios(urlTop, setTop);
      }, []);

    console.log(top)
    if (top.length === 0) {
        return 'Loading'
    }

    const data = [
        {
          col1: 'Hello',
          col2: 'World',
        },
        {
          col1: 'react-table',
          col2: 'rocks',
        },
        {
          col1: 'whatever',
          col2: 'you want',
        },
      ]

    return (
        <div>
        <div className="hero">
            <Quotes />
        </div>
        <h1>TOP 20</h1>

        <div className="top">
        
        {top.map(element => {
            return (
                <div className="table">
                    {element.name}
                </div>
            )
        })}
    
        </div>
        </div>
    );
};