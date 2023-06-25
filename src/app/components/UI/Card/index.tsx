import Image from "next/image";

interface CardProps {
  title: string;
  thumbnail: string;
}

export function Card({ title, thumbnail }: CardProps) {
  return (
    <div className="rounded-2xl w-80 shadow-lg shadow-zinc-400">
      <Image
        src={thumbnail}
        alt="Imagem do instrutor sorrindo com o nome do curso ao lado"
        className="rounded-t-2xl"
        width={320}
        height={180}
      />
      <div className="p-4">
        <span className="font-semibold mt-4 text-center">{title}</span>
      </div>
    </div>
  );
}
