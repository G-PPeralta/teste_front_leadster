"use client";

import { useState } from "react";
import { Card } from "../UI/Card";
import { CardContainer } from "../UI/Card/CardContainer";

const arrayWith18Elements = Array.from({ length: 18 });

export function Hero() {
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 9;
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = arrayWith18Elements.slice(
    indexOfFirstCard,
    indexOfLastCard
  );

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  return (
    <section className="flex items-center justify-center p-20">
      <CardContainer>
        {currentCards.map((_, index) => (
          <Card key={index} />
        ))}
      </CardContainer>
      <div className="flex justify-center mt-4">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-l"
        >
          Previous
        </button>
        <button
          onClick={handleNextPage}
          disabled={indexOfLastCard >= arrayWith18Elements.length}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r"
        >
          Next
        </button>
      </div>
    </section>
  );
}
