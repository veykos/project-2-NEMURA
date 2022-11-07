import React from "react";
import CardPeople from "./CardPeople";
import "./cards.css";

const PeopleGrid = ({ people, isLoading }) => {
  return isLoading ? (
    `loading...`
  ) : (
    <section className="cards-section">
      {/* <h2>People</h2> */}

      {people.map((people) => {
        return (
          <>
            <CardPeople key={people.person.id} people={people} />
          </>
        );
      })}
    </section>
  );
};

export default PeopleGrid;
