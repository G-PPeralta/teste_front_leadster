import { Facebook, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";
import logo from "../../../../../public/logo.png";
import { Links } from "./Links";
import { cases, mainLinks, materials } from "./Mocks";

export function Footer() {
  return (
    <footer className="w-full flex flex-col p-4">
      <div className="mx-auto p-2">
        <Image src={logo} alt="logo" width={270} height={57} />
        <span className="text-sm font-medium text-zinc-500 lg:text-base">
          Transformando visitantes em clientes.
        </span>
      </div>

      <div className="grid grid-cols-1 grid-flow-row px-10 md:px-0 md:flex md:flex-row md:flex-wrap md:items-start md:justify-evenly py-2 md:py-8 w-full max-w-7xl mx-auto border-b-2 border-footerGrayLine">
        <Links title="Links Principais" info={mainLinks} />
        <Links title="Cases" info={cases} />
        <Links title="Materiais" info={materials} />
        <div className="flex flex-col md:w-1/4">
          <h2 className="font-semibold text-linkTitleSection p-4 md:pb-8">
            Siga a Leadster
          </h2>
          <div className="flex flex-col gap-2">
            <nav className="flex flex-row items-center gap-2 mb-3">
              <div className="rounded-full bg-zinc-200 w-8 h-8 flex items-center justify-center">
                <a className="text-zinc-500 font-semibold" href="#" aria-label="Link para a página do Linkedin">
                  <Linkedin size={20} />
                </a>
              </div>
              <div className="rounded-full bg-zinc-200 w-8 h-8 flex items-center justify-center">
                <a className="text-zinc-500 font-semibold" href="#" aria-label="Link para a página do Facebook">
                  <Facebook size={20} strokeWidth={1} />
                </a>
              </div>
              <div className="rounded-full bg-zinc-200 w-8 h-8 flex items-center justify-center">
                <a className="text-zinc-500 font-semibold" href="#" aria-label="Link para a página do Instagram">
                  <Instagram size={20} />
                </a>
              </div>
            </nav>
            <p className="text-zinc-500 font-semibold w-full">
              <span className="text-zinc-600">E-mail:</span>{" "}
              contato@leadster.com.br
            </p>
            <p className="text-zinc-500 font-semibold w-full">
              <span className="text-zinc-600">Telefone:</span> (42) 98828-9851
            </p>
          </div>
        </div>
      </div>
      <div className="grid w-full grid-cols-1 gap-4 px-10 md:gap-0 lg:grid-flow-row lg:grid-cols-2 mt-4">
        <div className="flex h-10 w-full items-center justify-center ">
          <span className="text-center text-sm font-medium text-zinc-500">
            Copyright © 2015 - 2022 Todos os direitos reservados |{" "}
            <a
              className="text-buttonBlue transition-all hover:text-secondaryBlue"
              href="https://leadster.com.br"
              target="_blank"
              rel="noreferrer"
            >
              Leadster
            </a>
          </span>
        </div>
        <div className="-order-1 flex h-10 w-full items-center justify-center lg:order-2">
          <span className="text-center text-sm font-medium text-zinc-500">
            Rua José Loureiro, 464 - Centro - Curitiba PR - CEP: 80010-000 |
            Termos de uso
          </span>
        </div>
      </div>
    </footer>
  );
}
