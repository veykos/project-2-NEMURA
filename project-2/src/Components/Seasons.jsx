import React from "react";
import { useState, useEffect } from "react";
import {SelectSeasons} from "./SelectSeasons";
import image from "../assets/Image_not_available.png";


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

    // const Filter = () => {
    //     return isloading ? ( `loading...`) : (  
    //         <>
    //         <div>
    //             {episodes.filter(episode => episode.season===selected).map(filteredEpisodes => (
    //                 <li>{filteredEpisodes.id}</li>
    //             ))}
    //         </div>
    //         </>
    //     )
    // } 

    // const Filter = () => {
    //     return isloading ? ( `loading...`) : (  
    //         <>
    //         <div>
    //             {episodes.filter(episode => episode.season===selected).map(filteredEpisodes => (
    //                 <li>{filteredEpisodes.id}</li>
    //             ))}
    //         </div>
    //         </>
    //     )
    // } 

    useEffect(() => {
        fetchEpisodes();
    }, []);
    console.log(episodes, "episodes");

    // return (useEffect(() => {
    //     Filter()
    // }, [selected]));

    // return (Filter())
    return isloading ? ( `loading...`) : (  
        <>
             <div>
            {episodes.filter(episode => episode.season===selected).map(filteredEpisodes => (
           <div className="card">
             <div className="card-image">
             <img className="card-img" alt = "image"  src={filteredEpisodes.image ? filteredEpisodes.image.medium  : image}/>
         </div>
         <div className="card-info">
             <p className="result-name"><strong>{filteredEpisodes.name}</strong> </p>
             <p>Episode number: {filteredEpisodes.number}</p>
             <p>{filteredEpisodes.summary}</p>
             <p>{filteredEpisodes.rating.average}</p>
             <p>{filteredEpisodes.airdate}</p>
             <p>{filteredEpisodes.runtime}</p>

         </div>
         </div>
          ))}
          </div>
       </>
            )
      }

export default Seasons;