import { Plus_Jakarta_Sans as PlusJakartaSans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = PlusJakartaSans({
  weight: ["400", "500", "600", "700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "auto",
});

export const metadata = {
  title: "Leadster",
  description: "Leadster is a platform to generate leads for your business.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${plusJakartaSans.className} w-full bg-white text-black`}
      >
        {children}
      </body>
    </html>
  );
}
