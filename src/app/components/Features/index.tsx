import { Chart } from "./Chart";
import { Demonstration } from "./Demonstration";

export function Features() {
  return (
    <section className="flex flex-col md:flex-row bg-primaryBlue items-center justify-center gap-4 md:gap-24 p-4">
      <Chart />
      <Demonstration />
    </section>
  );
}
