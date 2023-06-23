import { Hero } from "./components/Hero/Hero";
import { Header } from "./components/UI/Header";
import { Intro } from "./components/UI/Intro";

export default function Home() {
  return (
    <main>
      <Header />
      <Intro />
      <Hero />
    </main>
  );
}
