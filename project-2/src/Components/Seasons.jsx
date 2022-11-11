import React from "react";
import { useState, useEffect } from "react";
import {SelectSeasons} from "./SelectSeasons";



const Seasons = ({id, selected}) => {

    const [episodes, setEpisodes] = useState([]);
    const [isloading, setIsloading] = useState(true);
    console.log(selected, "selected")

    const fetchEpisodes = async () => {
        const dataEpisodes = await fetch(`https://api.tvmaze.com/shows/${id}/episodes`);
        const episodeDetail = await dataEpisodes.json();
        setEpisodes(episodeDetail);
        setIsloading(false);
    };
    const Filter = () => {
        return isloading ? ( `loading...`) : (  
            <>
            <div>
                {episodes.filter(episode => episode.season===selected).map(filteredEpisodes => (
                    <li>{filteredEpisodes.id}</li>
                ))}
            </div>
            </>
        )
    } 

    useEffect(() => {
        fetchEpisodes();
    }, []);
    console.log(episodes, "episodes");

    return (useEffect(() => {
        Filter()
    }, [selected]));

    // return (Filter())

    // return isloading ? ( `loading...`) : (  
    //     <>
    //     <div>
    //         {episodes.filter(episode => episode.season===selected).map(filteredEpisodes => (
    //             <li>{filteredEpisodes.id}</li>
    //         ))}
    //     </div>
    //     </>
    // )
}

export default Seasons;