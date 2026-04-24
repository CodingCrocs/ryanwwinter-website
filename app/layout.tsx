import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

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
    <html lang="en" className="antialiased">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/lok4lnk.css" />
      </head>
      <body className="min-h-screen flex flex-col bg-neutral3 text-neutral1 font-sans">
        <Navbar />
        <main className="flex-1">{children}</main>
        <footer className="border-t border-white/10 py-8 text-center text-sm text-neutral1">
          <div className="max-w-6xl mx-auto px-6">
            &copy; {new Date().getFullYear()} Ryan Winter. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
