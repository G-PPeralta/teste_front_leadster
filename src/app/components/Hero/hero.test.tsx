import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import cards from "../../../mocks/cards..json";
import { Hero } from "./index";

test("renders Hero component without errors", () => {
  render(<Hero />);
});

test("renders filter buttons correctly", () => {
  render(<Hero />);

  const filterNames = [
    "Agências",
    "Chatbot",
    "Marketing Digital",
    "Geração de Leads",
    "Mídia Paga",
  ];

  filterNames.forEach((filterName) => {
    const filterButton = screen.getByText(filterName);
    expect(filterButton).toBeInTheDocument();
  });
});

test("filters cards when a filter button is clicked", () => {
  render(<Hero />);

  // Aqui deve ser considerada uma situação hipotética. Eu criei o filtro para que viesse inicialmente filtrado por "Marketing Digital", então eu sei que o conteúdo inicial dos cards não vai incluir chatbot. Também sei que o número de vídeos é diferente.

  // Número inicial de cards quando renderiza o componente
  const initialNumberOfCardsOnTheScreen = screen.queryAllByRole("img", {
    name: "",
  }).length;

  // Número de vídeos com o tema "Chatbot"
  const numberOfVideosWithChatbotTheme = cards.filter((card) => {
    return (
      card.title.toLowerCase().includes("chatbot") ||
      card.description.toLowerCase().includes("chatbot")
    );
  }).length;

  // Botão "Chatbot"
  const chatbotFilterButton = screen.getByRole("button", { name: /Chatbot/i });

  // Clicar no botão "Chatbot"
  fireEvent.click(chatbotFilterButton);

  // comparação entre o número de cards inicial e o número de cards com o tema "Chatbot"

  const comparison =
    initialNumberOfCardsOnTheScreen === numberOfVideosWithChatbotTheme;

  expect(comparison).toBeFalsy(); // o número de cards deve ser diferente após a filtragem
});

test("it should open a modal, with a video inside of it, when a card is clicked", async () => {
  render(<Hero />);

  // Encontra o primeiro card
  const firstCard = screen.getAllByAltText(
    "Imagem do instrutor sorrindo com o nome do curso ao lado"
  )[0];

  // clica no card
  fireEvent.click(firstCard);

  // espera o modal aparecer
  const modal = await waitFor(() => screen.getByRole("dialog"));

  expect(modal).toBeInTheDocument(); // modal na tela
  expect(modal).toContainHTML("iframe"); // video dentro do modal
});
