import React from "react";
import { useState, useEffect } from "react";
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


    useEffect(() => {
        fetchEpisodes();
    }, []);
    console.log(episodes, "episodes");

    return isloading ? ( `loading...`) : (  
        <>
             <div>
            {episodes.filter(episode => episode.season===selected).map(filteredEpisodes => (
           <div className="card">
             <div className="card-image">
             <img className="card-img" alt = "image"  src={filteredEpisodes.image ? filteredEpisodes.image.medium  : image}/>
         </div>
         <div className="card-info">
             <p className="result-name"><strong>{filteredEpisodes.number}. {filteredEpisodes.name}</strong> </p>
             <p dangerouslySetInnerHTML={{ __html: filteredEpisodes.summary }}></p>
             <p>
                <strong>Rating: </strong>
                {filteredEpisodes.rating.average}/10
                ⭐️
              </p>
             <p><strong>Airdate: </strong>{filteredEpisodes.airdate.split("-").reverse().join(".")}</p>
             
             <p><strong>Runtime: </strong>{filteredEpisodes.runtime}m</p>

         </div>
         </div>
          ))}
          </div>
       </>
            )
      }

export default Seasons;