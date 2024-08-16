import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SearchBar from "@/components/SearchBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Walmart Product Search",
  description: "Find products quickly and easily",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className + " h-screen flex flex-col relative"}>
        <header className="bg-blue-600 text-white p-4 shadow-lg flex items-center justify-between">
          <div className="flex items-center">
            <span className="ml-4 font-bold text-lg">Walmart</span>
            <img
              src="/walmart-square.jpg"
              alt="Walmart Logo"
              className="h-10"
            />
          </div>
          <SearchBar />
        </header>
        <main className="flex-grow bg-gray-100 p-8">{children}</main>
        <footer className="bg-blue-600 text-white p-4 text-center">
          © 2024 Walmart. All rights reserved.
        </footer>
      </body>
    </html>
  );
}

export function Home() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="bg-white rounded-lg shadow-lg p-4">
        <img
          src="/product-1.jpg"
          alt="Product 1"
          className="w-full h-auto rounded-t-lg"
        />
        <div className="p-4">
          <h2 className="text-xl font-bold">Product Name</h2>
          <p className="text-gray-600">$19.99</p>
          <button className="bg-yellow-500 text-white rounded-full py-2 px-4 mt-4 hover:bg-yellow-600">
            Add to Cart
          </button>
        </div>
      </div>
      {/* Repeat product cards as needed */}
    </section>
  );
}
