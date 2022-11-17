import React from "react";
import CurrentPage from "../CurrentPage";
import "./results.css";
import "../../App.css";
import Cast from "./Cast";


const Results = ({cast, isloading}) => {
  console.log(cast, "cast")
  // if (!isloading) {
  //   console.log(cast, "load")
  // } else {
  //   console.log("not yet")
  // }
  return isloading ? (
    `loading...`
  ) : (

        // <div>
        //   {cast.map(item =>{
        //    return <p>{item.character?.name ? item.character.name : "M"}</p>
        //   })}
           
        // </div>
        <div>
          <div className="headlines">
            <h2>{cast.length ? "Cast" : null}</h2>
          </div>
          <div  className="mul">
          <section className="cards-section">
            {cast.map((cast) => {
 return (
   <>
     <Cast key={cast.person.id} cast={cast} />
   </>
 );
})}
</section>
</div>
</div>
    );
};
  
  
  export default Results;
  


