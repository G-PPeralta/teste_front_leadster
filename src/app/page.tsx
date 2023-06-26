import { Hero } from "./components/Hero";
import { Intro } from "./components/Intro";
import { Header } from "./components/UI/Header";

export default function Home() {
  return (
    <main>
      <Header />
      <Intro />
      <Hero />
    </main>
  );
}
