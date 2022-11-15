import React from "react";
import CardPeople from "./CardPeople";
import "./cards.css";
import { HashLink as Link } from "react-router-hash-link";

const PeopleGrid = ({ people, isLoading }) => {
  return isLoading ? (
    `loading...`
  ) : (

    <div>
       <div className="headlines">
                <h2>{people.length ? "People" : null}</h2>
            </div>
          <div  className="mul">
    <section className="cards-section">
     {people.map((people) => {
        return (
          <>
            {/* <CardPeople key={people.person.id} people={people} /> */}
            <Link
             onClick={() => {
               window.scroll(0, 0);
             }}
             to={"/people/"  + people.person.name + "/" + people.person.id}
           >
             <CardPeople key={people.person.id} people={people} />
           </Link>
          </>
        );
      })}
    </section>
    </div>
    </div>
  );
};
{/* <p>{item.character?.name ? item.character.name : "M"}</p> */}
export default PeopleGrid;
