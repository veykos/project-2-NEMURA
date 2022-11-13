import React from "react";
import image from "../../assets/Image_not_available.png";
import "../../Components/cards/cards.css"


const Cast = ({ cast }) => {

  return (
    
    <>
      <div className="card">
        <div className="card-image">
            <img className="card-img" alt = "image"  src={cast.character?.image ? cast.character.image.medium  : image}/>
        </div>
        <div className="card-info">
            <p className="result-name"><strong>{cast.person?.name}</strong> </p>
            <p>{cast.character?.name}</p>
            {/* <p>{people.person?.gender ?  people.person?.gender==="Male" ? "Actor" : "Actress" : "Actor/Actress"}</p>
            <p>Country: {people.person?.country?.name ? people.person.country.name : " Unknown"}</p> */}
        </div>
      </div>
    </>
  );
};

export default Cast;

// return isloading ? ( `loading...`) : (  
//   <>
//   <div className="card">
//       {episodes.filter(episode => episode.season===selected).map(filteredEpisodes => (
//        <div className="card-image">
//        <img className="card-img" alt = "image"  src={filteredEpisodes.image ? filteredEpisodes.image.medium  : image}/>
//    </div>
//    <div className="card-info">
//        <p className="result-name"><strong>{`Episode name: `filteredEpisodes.name}</strong> </p>
//        <p>{`Episode number: `filteredEpisodes.number}</p>
//    </div>
//     ))}
//  </div>
//  </>
//       )
// }

// import image from "../assets/Image_not_available"