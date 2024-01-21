import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from '@/components/Navbar/index';
import Footer from '@/components/Footer/index';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ByDesign",
  description: "Dedicated to bring your ideas to life.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
