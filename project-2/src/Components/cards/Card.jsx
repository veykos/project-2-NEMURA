import React from "react";
// import Modal from "./Modal";
import "./cards.css";
import image from "../../assets/Image_not_available.png";


const Card = ({ show }) => {
  const ratingConditional = (rating) => {
    if (rating <= 2) {
      return "⭐️";
    }
    if (rating > 2 && rating <= 4) {
      return "⭐️ ⭐️";
    }
    if (rating > 4 && rating <= 6) {
      return "⭐️ ⭐️ ⭐️";
    }
    if (rating > 6 && rating <= 8) {
      return "⭐️ ⭐️ ⭐️ ⭐️";
    }
    if (rating > 8 && rating <= 10) {
      return "⭐️ ⭐️ ⭐️ ⭐️ ⭐️";
    } else {
      return "---";
    }
  };
  // console.log(show.show.rating.average);
  return (
    <>
      <div className="card">
        <div className="card-image">
          <img className="card-img" src={show.show?.image ? show.show?.image?.medium : image} />
        </div>
        <div className="card-info">
          <p className="result-name"><strong>{show.show?.name}</strong></p>
          <p>
            Network: {show.show.network && show.show.network.name ? show.show.network.name : " Unknown"}
          </p>
          <p>
            <strong> </strong>
            {ratingConditional(Math.round(show.show?.rating?.average))}
          </p>
          {/* <p>
            {show.show.premiered}-{show.show.ended}
          </p> */}
        </div>
      </div>
    </>
  );
};

// const CardPeople = ({ show }) => {

//   return (
//     <>
//       <div className="card">
//         <div className="card-body">
//           <div className="cardImg-container">
//             <img className="card-img" src={show.person?.image?.medium } />
//             {/* show.show?.image?.medium || show.person?.image?.medium */}
//           </div>
//           <div className="card-name">
//             <h5>{show.person?.name}</h5>
//             {/* show.show?.name|| show.person?.name*/}
//           </div>
//         </div>
//         <div className="card-info">
//           <div>
//             {/* <p>{show.show.network && show.show.network.name ? show.show.network.name : ""}</p> */}
//             <p>
//               {/* {show.show.premiered}/{show.show.ended} */}
//             </p>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };
// , CardPeople

export default Card;
