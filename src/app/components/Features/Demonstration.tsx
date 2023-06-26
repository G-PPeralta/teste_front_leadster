import Image from "next/image";
import card from "../../../../public/no-card-dark.webp";
import rating from "../../../../public/rating.webp";
import selo from "../../../../public/selo_RD.png";

export function Demonstration() {
  return (
    <div>
      <div>
        <h1>
          Pronto para triplicar sua <strong>Geração de Leads</strong>?
        </h1>
        <span>Criação e ativação em 4 minutos</span>
      </div>
      <div>
        <button>VER DEMONSTRAÇÃO</button>
        <Image src={selo} alt="selo da RD Station" />
      </div>
      <div>
        <div>
          <Image src={card} alt="card" />
          <span>Não é necessário Cartão de Crédito</span>
        </div>
        <div>
          <Image src={rating} alt="rating" />
          <span>4.9/5 média de satisfação</span>
        </div>
      </div>
    </div>
  );
}
