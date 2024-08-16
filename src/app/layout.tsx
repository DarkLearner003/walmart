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
      <body className={inter.className + " h-screen flex flex-col"}>
        <header className="fixed w-full flex flex-col">
          <div className="top-0 left-0 right-0 bg-blue-600 text-white p-2 shadow-lg flex items-center justify-between z-50 w-full">
            <SearchBar />
          </div>
          <div className="bg-blue-100 p-2 flex justify-around">
            <a href="#departments" className="text-blue-600 hover:text-blue-800">Departments</a>
            <a href="#services" className="text-blue-600 hover:text-blue-800">Services</a>
            <a href="#fall-savings" className="text-blue-600 hover:text-blue-800">Fall Savings</a>
            <a href="#grocery-essentials" className="text-blue-600 hover:text-blue-800">Grocery & Essentials</a>
            <a href="#new-trending" className="text-blue-600 hover:text-blue-800">New & Trending</a>
            <a href="#back-to-school" className="text-blue-600 hover:text-blue-800">Back To School</a>
            <a href="#college-essentials" className="text-blue-600 hover:text-blue-800">College Essentials</a>
            <a href="#home" className="text-blue-600 hover:text-blue-800">Home</a>
            <a href="#electronics" className="text-blue-600 hover:text-blue-800">Electronics</a>
            <a href="#fashion" className="text-blue-600 hover:text-blue-800">Fashion</a>
            <a href="#baby" className="text-blue-600 hover:text-blue-800">Baby</a>
          </div>
        </header>


        <main className="flex-grow bg-gray-100 p-8 mt-20">{children}</main>
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
