import Image from "next/image";
import card from "../../../../public/no-card-dark.webp";
import rating from "../../../../public/rating.webp";
import selo from "../../../../public/selo_RD.png";

export function Demonstration() {
  return (
    <div>
      <div className="border-b-2 border-lineGrey mb-6">
        <h1 className="text-lg md:text-2xl lg:text-4xl py-4 max-w-md p-2">
          Pronto para triplicar sua <strong>Geração de Leads</strong>?
        </h1>
        <h2 className="text-md lg:text-lg mb-4 p-2">
          Criação e ativação em <strong>4 minutos</strong>.
        </h2>
      </div>
      <div className="flex flex-col items-center md:flex-row gap-4 w-full">
        <button className="group h-14 w-fit rounded-full bg-buttonBlue px-4 text-black transition-colors hover:bg-secondaryBlue lg:h-[70px]">
          <span className="flex w-fit items-center justify-center px-5 py-2 text-center text-sm font-bold leading-5 text-white transition-colors lg:text-base">
            VER DEMONSTRAÇÃO
          </span>
        </button>
        <Image src={selo} alt="selo da RD Station" />
      </div>
      <div className="flex flex-col md:flex-row gap-4 w-full items-center py-4">
        <div className="flex flex-row gap-2">
          <Image
            src={card}
            alt="imagem de um cartão de banco"
            className="h-4"
          />
          <span className="text-sm font-semibold text-black">
            <strong>Não</strong> é necessário de Cartão de Crédito
          </span>
        </div>
        <div className="h-6 bg-black border border-black hidden md:block" />
        <div className="flex flex-row gap-2">
          <Image
            src={rating}
            alt="imagem de 5 estrelas, com preenchimento amarelo correspondente à nota"
          />
          <span className="text-sm font-semibold text-black">
            <strong>4.9</strong>/5 média de satisfação
          </span>
        </div>
      </div>
    </div>
  );
}
