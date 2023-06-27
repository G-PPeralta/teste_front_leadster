import Image from "next/image";
import logo from "../../../../../public/logo.png";

export function Footer() {
  return (
    <footer className="w-full flex flex-col p-4">
      <div className="mx-auto p-2">
        <Image src={logo} alt="logo" width={270} height={57} />
        <span className="text-sm font-medium text-zinc-500 lg:text-base">
          Transformando visitantes em clientes.
        </span>
      </div>

      <div className="flex flex-row flex-wrap justify-center items-center gap-20 py-8">
        <div className="flex flex-col">
          <h2 className="font-semibold text-linkTitleSection pb-8">
            Links Principais
          </h2>
          <nav className="flex flex-col gap-2">
            <a className="text-zinc-500 font-semibold" href="#">
              Home
            </a>
            <a className="text-zinc-500 font-semibold" href="#">
              Ferramenta
            </a>
            <a className="text-zinc-500 font-semibold" href="#">
              Preços
            </a>
            <a className="text-zinc-500 font-semibold" href="#">
              Contato
            </a>
          </nav>
        </div>
        <div className="flex flex-col">
          <h2 className="font-semibold text-linkTitleSection pb-8">Cases</h2>
          <nav className="flex flex-col gap-2">
            <a className="text-zinc-500 font-semibold" href="#">
              Geração de Leads B2B
            </a>
            <a className="text-zinc-500 font-semibold" href="#">
              Geração de Leads em Software
            </a>
            <a className="text-zinc-500 font-semibold" href="#">
              Geração de Leads em Imobiliária
            </a>
            <a className="text-zinc-500 font-semibold" href="#">
              Cases de Sucesso
            </a>
          </nav>
        </div>
        <div className="flex flex-col">
          <h2 className="font-semibold text-linkTitleSection pb-8">
            Materiais
          </h2>
          <nav className="flex flex-col gap-2">
            <a className="text-zinc-500 font-semibold" href="#">
              Blog
            </a>
            <a className="text-zinc-500 font-semibold" href="#">
              Parceria com Agências
            </a>
            <a className="text-zinc-500 font-semibold" href="#">
              Guia Definitivo do Marketing
            </a>
            <a className="text-zinc-500 font-semibold" href="#">
              Materiais Gratuitos
            </a>
          </nav>
        </div>
        <div className="flex flex-col">
          <h2 className="font-semibold text-linkTitleSection pb-8">
            Siga a Leadster
          </h2>
          <nav className="flex flex-col gap-2">
            <a className="text-zinc-500 font-semibold" href="#">
              linkedin
            </a>
            <a className="text-zinc-500 font-semibold" href="#">
              facebook
            </a>
            <a className="text-zinc-500 font-semibold" href="#">
              instagram
            </a>
            <span className="text-zinc-500 font-semibold">
              E-mail: contato@leadster.com.br
            </span>
            <span className="text-zinc-500 font-semibold">
              Telefone: (42) 98828-9851
            </span>
          </nav>
        </div>
      </div>
    </footer>
  );
}
