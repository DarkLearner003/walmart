'use client';

import Header from '@/components/Header';
import {useRouter} from 'next/navigation';
import {useState} from 'react';

export default function Home() {
  const router = useRouter();
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    router.push(`/search?query=${encodeURIComponent(query)}`);
  };
  const [toggleAi, setToggleAi] = useState(false);
  return (
    <main className="relative p-8 bg-gray-100 flex-grow">
      {/* <Header /> */}

      <button
        className="absolute ml-2 bg-gray-500 text-white rounded-full p-2 shadow-md hover:bg-gray-600 transition right-80 -top-[6.5rem]"
        onClick={() => setToggleAi((prev)=>!prev)}
      >
        ✨AI Search
      </button>
      {toggleAi && (
        <section className="mb-8 bg-blue-50 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-blue-700">Welcome back!</h3>
          <p className="text-yellow-500 font-semibold text-lg mt-2">
            Looking for something specific?
          </p>
          <p className="text-gray-700 mt-2">
            Our AI-powered search is here to help you find exactly what you
            need. Type below to get started!
          </p>
          <form
            className="relative mt-4 flex items-center"
            onSubmit={handleSearch}
          >
            <input
              type="text"
              placeholder="Describe the product you are looking for..."
              className="w-full p-3 border rounded-lg shadow-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button
              className="ml-2 bg-blue-500 text-white rounded-full p-2 shadow-md hover:bg-blue-600 transition"
              type="submit"
            >
              🔍
            </button>
          </form>
        </section>
      )}

      <section>
        <h2 className="text-2xl font-bold mb-6 text-blue-600">
          Top Categories
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-red-100 p-6 rounded-lg text-center shadow-md border border-gray-300 transition-transform transform hover:scale-105 hover:shadow-lg">
            <img
              src="./path-to-electronics-image.jpg"
              alt="Electronics"
              className="w-32 h-32 mx-auto mb-4 object-cover rounded-full border border-red-200"
            />
            <h3 className="text-lg font-semibold text-red-700">Electronics</h3>
          </div>
          <div className="bg-green-100 p-6 rounded-lg text-center shadow-md border border-gray-300 transition-transform transform hover:scale-105 hover:shadow-lg">
            <img
              src="https://assets-global.website-files.com/6060bea07a71c73512f838b3/6078b1293520948b95ca043d_shutterstock_549055441-s.jpeg"
              alt="Home Goods"
              className="w-32 h-32 mx-auto mb-4 object-cover rounded-full border border-green-200"
            />
            <h3 className="text-lg font-semibold text-green-700">Home Goods</h3>
          </div>
          <div className="bg-yellow-100 p-6 rounded-lg text-center shadow-md border border-gray-300 transition-transform transform hover:scale-105 hover:shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNsb3RoZXN8ZW58MHx8MHx8fDA%3D"
              alt="Clothing"
              className="w-32 h-32 mx-auto mb-4 object-cover rounded-full border border-yellow-200"
            />
            <h3 className="text-lg font-semibold text-yellow-700">Clothing</h3>
          </div>
          <div className="bg-purple-100 p-6 rounded-lg text-center shadow-md border border-gray-300 transition-transform transform hover:scale-105 hover:shadow-lg">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQG0r0_9_zP_XQVli0JgYHk_oVDLbsYsB_lQ&s"
              alt="Books"
              className="w-32 h-32 mx-auto mb-4 object-cover rounded-full border border-purple-200"
            />
            <h3 className="text-lg font-semibold text-purple-700">Books</h3>
          </div>
        </div>
      </section>
    </main>
  );
}
