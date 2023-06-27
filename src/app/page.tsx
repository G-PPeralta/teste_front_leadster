import { Features } from "./components/Features";
import { Hero } from "./components/Hero";
import { Intro } from "./components/Intro";
import { Footer } from "./components/UI/Footer";
import { Header } from "./components/UI/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Intro />
        <Hero />
        <Features />
      </main>
      <Footer />
    </>
  );
}
