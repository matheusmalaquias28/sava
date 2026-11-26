import localFont from "next/font/local";
import { Montserrat } from "next/font/google";

// Gotham (fonte institucional da Savá) nos títulos e rótulos
export const gotham = localFont({
  src: "../fonts/Gotham-Medium.otf",
  variable: "--font-gotham",
  weight: "500",
  display: "swap",
});

// Revans: tipografia principal da marca (wordmark "SAVÁ"), usada no preloader
export const revans = localFont({
  src: "../fonts/Revans-Medium.otf",
  variable: "--font-revans",
  weight: "500",
  display: "swap",
});

// Texto corrido: geométrica da mesma família visual da Gotham, com pesos leves
export const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "500"],
  display: "swap",
});
