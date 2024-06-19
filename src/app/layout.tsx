import type { Metadata } from "next";
import { Alegreya } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Header from "~/components/Header";
import Footer from "~/components/Footer";

import "./globals.css";

const inter = Alegreya({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aesthetic Gardens",
  description: "The garden maintenance service organization",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-p-[120px] scroll-smooth">
      <body
        className={`${inter.className} bg-[#619D61] font-medium text-white`}
      >
        <Header />
        {children}
        <Footer />
        <ToastContainer />
      </body>
    </html>
  );
}
