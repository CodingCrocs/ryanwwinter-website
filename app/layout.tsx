import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Ryan Winter",
  description: "Personal website for Ryan Winter — resume, portfolio, and photography.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="min-h-screen flex flex-col bg-neutral3 text-neutral1 font-sans">
        <Navbar />
        <main className="flex-1">{children}</main>
        <footer className="border-t border-neutral2 py-8 text-center text-sm text-neutral1">
          <div className="max-w-6xl mx-auto px-6">
            &copy; {new Date().getFullYear()} Ryan Winter. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
