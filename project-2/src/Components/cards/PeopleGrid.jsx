import React from "react";
import CardPeople from "./CardPeople";
import "./cards.css";

const PeopleGrid = ({ people, isLoading }) => {
  return isLoading ? (
    `loading...`
  ) : (

    <div>
       <div className="headlines">
                <h2>{people.length ? "People" : null}</h2>
                <hr></hr>
            </div>
    <section className="cards-section">
     {people.map((people) => {
        return (
          <>
            <CardPeople key={people.person.id} people={people} />
          </>
        );
      })}
    </section>
    </div>
  );
};
{/* <p>{item.character?.name ? item.character.name : "M"}</p> */}
export default PeopleGrid;
