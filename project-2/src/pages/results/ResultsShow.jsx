// import React from "react";
// import Search from "../../Components/Search";
// import CardGrid from "../../Components/cards/CardGrid";
// import PeopleGrid from "../../Components/cards/PeopleGrid";
// import { useState } from "react";
// import { useEffect } from "react";
// import axios from "axios";
// import "./results.css";
// import "../../App.css";


// const ResultsShow1 = ({ show }) => {
//     const ratingConditional = (rating) => {
//         if (rating <= 2) {
//           return "⭐️";
//         }
//         if (rating > 2 && rating <= 4) {
//           return "⭐️ ⭐️";
//         }
//         if (rating > 4 && rating <= 6) {
//           return "⭐️ ⭐️ ⭐️";
//         }
//         if (rating > 6 && rating <= 8) {
//           return "⭐️ ⭐️ ⭐️ ⭐️";
//         }
//         if (rating > 8 && rating <= 10) {
//           return "⭐️ ⭐️ ⭐️ ⭐️ ⭐️";
//         } else {
//           return "---";
//         }
//       };
    
//     return (
//       <>
//         <div className="card">
//           <div className="card-image">
//             <img className="card-img" src={show.show?.image ? show.show?.image?.original : "image"} />
//           </div>
//           <div className="card-info">
//             <p className="result-name"><strong>{show.show?.name}</strong></p>
//             <p>
//               Network: {show.show.network && show.show.network.name ? show.show.network.name : " Unknown"}
//             </p>
//             <p>
//               <strong> </strong>
//               {ratingConditional(Math.round(show.show?.rating?.average))}
//             </p>
//           </div>
//         </div>
//       </>
//     );
//   };


//   const ResultsShow = ({ shows, isLoading }) => {
//     return isLoading ? (
//       `loading...`
//     ) : (
//         <section className="cards-section">
//           {/* <h2>Titles</h2> */}
  
//           {shows.map((show) => {
  
//             return (
//               <>
//                 <ResultsShow1 key={show.show?.id} show={show} />
//               </>
//             );
//           })}
//         </section>
//     );
//   };
  
  
//   export default ResultsShow;
  


