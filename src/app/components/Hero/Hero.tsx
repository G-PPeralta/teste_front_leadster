"use client";

import { useState } from "react";
import cardContent from "../../../mocks/cards..json";
import { Card } from "../UI/Card";
import { CardContainer } from "../UI/Card/CardContainer";

export function Hero() {
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 9;
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = cardContent.slice(indexOfFirstCard, indexOfLastCard);

  const totalPages = Math.ceil(cardContent.length / cardsPerPage);
  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <section className="flex flex-col items-center justify-center p-4 md:p-20">
      <CardContainer>
        {currentCards.map((card) => (
          <Card key={card.id} title={card.title} thumbnail={card.thumbnail} />
        ))}
      </CardContainer>
      <div className="flex justify-center mt-4 items-center">
        <span className="font-semibold px-2">Página</span>
        {pageNumbers.map((pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => handlePageChange(pageNumber)}
            className={`${
              pageNumber === currentPage
                ? "border border-blue-500 hover:bg-blue-500 hover:text-white text-blue-500"
                : "text-black hover:bg-blue-500 hover:text-white"
            } font-bold py-2 px-4 rounded mx-1`}
          >
            {pageNumber}
          </button>
        ))}
      </div>
    </section>
  );
}
