import Image from "next/image";
import thumbnail from "../../../../../public/thumbnail.png";

export function Card() {
  return (
    <div>
      <Image
        src={thumbnail}
        alt="Imagem do instrutor sorrindo com o nome do curso ao lado"
      />
      <span>Como Aumentar a sua Geração de Leads feat. Traktor</span>
    </div>
  );
}
