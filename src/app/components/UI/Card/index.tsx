import Image from "next/image";
import thumbnail from "../../../../../public/thumbnail.png";

export function Card() {
  return (
    <div className="rounded-2xl w-80 shadow-lg shadow-zinc-400">
      <Image
        src={thumbnail}
        alt="Imagem do instrutor sorrindo com o nome do curso ao lado"
        className="rounded-t-2xl"
      />
      <div className="p-4">
        <span className="font-semibold mt-4 text-center">
          Como Aumentar a sua Geração de Leads feat. Traktor
        </span>
      </div>
    </div>
  );
}
