import Image from "next/image";
import chart from "../../../../public/chart.png";

export function Chart() {
  return (
    <div>
      <Image src={chart} alt="chart" />
    </div>
  );
}
