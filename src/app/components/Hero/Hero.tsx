import { Card } from "../UI/Card";
import { CardContainer } from "../UI/Card/CardContainer";

const arrayWith9Elements = Array.from({ length: 9 });

export function Hero() {
  return (
    <section className="flex items-center justify-center p-20">
      <CardContainer>
        {arrayWith9Elements.map((_, index) => (
          <Card key={index} />
        ))}
      </CardContainer>
    </section>
  );
}
