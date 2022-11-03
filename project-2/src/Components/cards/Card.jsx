import React from "react";
// import Modal from "./Modal";
import "./cards.css";

const CardTitles = ({ show }) => {
  // if (show.show.network || show.show.network.name)  {
  //   `Network: ${show.show.network.name}`|| "not available";


  // }
  return (
    
    <>
      <div className="card">
        <div className="card-body">
          <div className="cardImg-container">
            <img className="card-img" alt = "no image available" src={show.show?.image?.medium || show.person?.image?.medium} />
            {/* <img className="card-img" src={show.person?.image?.medium } /> */}
            {/* show.show?.image?.medium || show.person?.image?.medium */}
          </div>
          <div className="card-name">
            <p>{show.show?.name || show.person?.name} </p>
            {/* <p>{show.person?.name}</p> */}
            {/* show.show?.name|| show.person?.name*/}
            <p>{show.show?.network ?`Network: ${show.show.network.name}`  : (show.show?.network?.name || show.person?.gender)===false  ? "no info" : show.person?.gender==="Male" ? "Actor" : "Actress"}</p>
          </div>
        </div>
        <div className="card-info">
          <div>
            {/* <p>{show.show.network && show.show.network.name ? show.show.network.name : ""}</p> */}
            <p>
              {/* {show.show.premiered}/{show.show.ended} */}
            </p>
          </div>
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

export default CardTitles;
