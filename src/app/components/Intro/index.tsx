import Image from "next/image";
import assetHeader from "../../../../public/asset-header.png";

export function Intro() {
  return (
    <section className="bg-primaryBlue flex w-full flex-col py-10 md:py-20 lg:py-40 items-center px-5">
      <div className="bg-white border-2 mb-4 rounded-r-full rounded-ss-full border-secondaryBlue rounded-sm flex items-center w-fit justify-center py-2 px-5">
        <span className="text-sm font-semibold text-secondaryBlue md:text-base">
          WEBINARS EXCLUSIVOS
        </span>
      </div>

      <div className="flex flex-col items-center border-b-2 border-lineGrey pb-4">
        <h1 className="text-2xl md:text-5xl">Menos Conversinha,</h1>

        <div className="relative mt-2 w-fit">
          <h1 className="text-terciaryBlue text-4xl md:text-8xl lg:text-8xl font-bold">
            Mais Conversão
          </h1>
          <Image
            src={assetHeader}
            alt="imagem de faíscas"
            className="absolute w-8 -top-1 -right-4 md:w-12 md:top-1 md:-right-5"
          />
        </div>
      </div>

      <span className="mx-auto px-6 text-center text-sm md:px-12 lg:px-0 lg:text-xl mt-4">
        Conheça as estratégias que <strong>mudaram o jogo</strong> e como
        aplicá-las no seu negócio
      </span>
    </section>
  );
}
