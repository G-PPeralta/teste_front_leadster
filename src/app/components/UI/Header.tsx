import Image from "next/image";
import logo from "../../../../public/logo.png";

export function Header() {
  return (
    <header className="flex items-center justify-center w-full h-[130px]">
      <Image src={logo} alt="Logo da Leadster" />
    </header>
  );
}
