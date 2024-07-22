import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Levy Jr Portfolio",
  description: "Não é só um site, é uma experiência! Se você deseja aproveitar ao máximo as vantagens que a presença online pode oferecer, estou aqui para ajudar a transformar essa visão em realidade.",
  verification: {
    google: 'GAGdEvTt-eC51oiqkqLRCE6pVutnClRVYnI-pM47pRA'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className}`}>
        {children}
      </body>
    </html>
  );
}
