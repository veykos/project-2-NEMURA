import React, { useState } from "react";
import Card from "./Card";
import "./cards.css";
import Modal from "../modal/Modal";

const CardGrid = ({ shows, isLoading }) => {
  const [isOpen, setIsOpen] = useState(false);
  return isLoading ? (
    `loading.....`
  ) : (
    <section className="cards-section">
      {shows.map((show) => {
        return (
          <>
            <Card key={show.show.id} show={show} />

            {/* <Modal key={show.show.id} show={show} /> */}
          </>
        );
      })}
    </section>
  );
};

export default CardGrid;
