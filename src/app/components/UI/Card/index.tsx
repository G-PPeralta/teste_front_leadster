import clsx from "clsx";
import Image from "next/image";

interface CardProps {
  title: string;
  thumbnail: string;
  hover: boolean;
}

export function Card({ title, thumbnail, hover }: CardProps) {
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
        <span
          className={clsx("font-semibold mt-4 text-center", {
            "text-hoverCardTextBlue": hover,
          })}
        >
          {title}
        </span>
      </div>
    </div>
  );
}
