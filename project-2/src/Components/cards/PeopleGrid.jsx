import React from "react";
import Card from "./Card";
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
              <CardPeople key={ people.person} people={people} />
              {/* show.show.id ||  show.person  */}
              {/* <Card shows={show} /> */}
              {/* <li key={show.show.id}>
                    <img src={show.show?.image?.medium} />
                    <p>{show.show.name}</p>
                    <p>{show.show.language}</p>
                  </li> */}
              {/* <Card key={show.person} show={show} /> */}
            </>
          );
        })}
        </section>
      );
};
    
export default PeopleGrid;