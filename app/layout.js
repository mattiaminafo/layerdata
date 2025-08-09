import { Poppins } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

const gotham = localFont({
  src: [
    {
      path: "../public/fonts/gotham-bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-gotham",
});

export const metadata = {
  title: "LayerData",
  description: "Generiamo la tua macchina per la crescita",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="cyberpunk" className={`${poppins.className} ${gotham.variable}`}>
      <body>{children}</body>
    </html>
  );
}
