import "./globals.css";
import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["400","500","600","700"], variable: "--font-poppins" });
const inter = Inter({ subsets: ["latin"], weight: ["400","500"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "MY MAA Markets — Home",
  description: "Pixel-exact static homepage built with Next.js and Tailwind.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
