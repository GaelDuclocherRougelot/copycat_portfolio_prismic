import type { Metadata } from "next";
import { Averia_Serif_Libre, Nunito } from "next/font/google";
import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const averia_serif_libre = Averia_Serif_Libre({
  subsets: ["latin"],
  weight: ["300"],
  variable: "--font-primary",
});
const nunito = Nunito({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500"],
  variable: "--font-caption",
});

export const metadata: Metadata = {
  title: "Copycat - Portfolio",
  description: "Copycat of Benj Haisch website in Next.js & Prismic",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${nunito.variable} ${averia_serif_libre.variable} font-primary`}
      >
        {children}
      </body>
    </html>
  );
}
