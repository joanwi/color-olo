import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Color Olo - Discover the New Color Olo",
  description: "Discover color olo: a new, hyper-saturated blue-green color, its discovery, uniqueness, and potential applications in vision science and technology.",
  keywords: "color olo, new color, blue-green color, new color olo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-olo min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <footer className="bg-white/80 backdrop-blur-sm">
          <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <p className="text-center text-gray-500 text-sm">
              © 2025 Color olo. All rights reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
