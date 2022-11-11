import React from "react";
import { useState, useEffect } from "react";
import {SelectSeasons} from "./SelectSeasons";



const Seasons = ({id, selected}) => {

    const [episodes, setEpisodes] = useState([]);
    const [isloading, setIsloading] = useState(true);
    console.log(selected, "yeni file")

    const fetchEpisodes = async () => {
        const dataEpisodes = await fetch(`https://api.tvmaze.com/shows/${id}/episodes`);
        const episodeDetail = await dataEpisodes.json();
        setEpisodes(episodeDetail);
        setIsloading(false);
    };

    useEffect(() => {
        fetchEpisodes();
    }, []);
    console.log(episodes, "episodes");
    return isloading ? ( `loading...`) : (
        <>
        <div>
            <div>
                <p>{episodes[0].id}</p>
            </div>
        </div>
        </>
    )
}

export default Seasons;