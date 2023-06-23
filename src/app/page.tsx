import { Header } from "./components/UI/Header";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Header />
      <h1>Landing Page</h1>
    </main>
  );
}
