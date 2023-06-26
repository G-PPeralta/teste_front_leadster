import { Chart } from "./Chart";
import { Demonstration } from "./Demonstration";

export function Features() {
  return (
    <div className="flex flex-row bg-primaryBlue">
      <Chart />
      <Demonstration />
    </div>
  );
}
