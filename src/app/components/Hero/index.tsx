"use client";

import { useState } from "react";
import cardContent from "../../../mocks/cards..json";
import { Filter } from "../Filter";
import { Modal } from "../Modal";
import { CardContainer } from "../UI/Card/CardContainer";

export function Hero() {
  const [filterType, setFilterType] = useState("Chatbot");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredCards = cardContent.filter((card) => {
    const titleLowerCase = card.title.toLowerCase();
    const filterTypeLowerCase = filterType.toLowerCase();

    if (filterTypeLowerCase === "geração de leads") {
      return (
        titleLowerCase.includes("geração de leads") ||
        titleLowerCase.includes("lead") ||
        titleLowerCase.includes("leads")
      );
    }

    return filterTypeLowerCase
      .split(" ")
      .some((filter) => titleLowerCase.includes(filter));
  });

  const cardsPerPage = 9;
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = filteredCards.slice(indexOfFirstCard, indexOfLastCard);

  const totalPages = Math.ceil(filteredCards.length / cardsPerPage);
  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  function handleFilterClick(value: string) {
    setFilterType(value);
  }

  return (
    <section className="flex flex-col items-center justify-center p-4 md:p-20">
      <Filter onHandleFilter={handleFilterClick} filterType={filterType} />
      <CardContainer>
        {currentCards.map((card) => (
          <Modal key={card.id} card={card} />
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
