import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Digiket | High-Impact SEO Strategies",
  description: "Implementation-ready design-system guidance and SEO strategies for business growth.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.className} font-sans text-[#595959] bg-[#fdf7f4] antialiased overflow-x-hidden`}
      >
        <Navbar />
        <main className="pt-[64px] lg:pt-[80px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
