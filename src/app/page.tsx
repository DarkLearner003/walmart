export default function Home() {
  return (
    <main className="p-8 bg-gray-100 flex-grow">
      <section>
        <h2 className="text-2xl font-bold mb-8 text-gray-900">
          Top Categories
        </h2>
        <div className="flex flex-wrap gap-6">
          {/* Electronics Card */}
          <div className="bg-white p-6 rounded-lg flex-1 text-center shadow-xl border border-gray-300 transition-transform transform hover:scale-105 hover:shadow-2xl">
            <img
              src="./path-to-electronics-image.jpg" // Replace with actual image path
              alt="Electronics"
              className="w-36 h-36 mx-auto mb-4 object-cover rounded-full border border-gray-200"
            />
            <h3 className="text-2xl font-semibold text-gray-900">
              Electronics
            </h3>
          </div>
          {/* Home Goods Card */}
          <div className="bg-white p-6 rounded-lg flex-1 text-center shadow-xl border border-gray-300 transition-transform transform hover:scale-105 hover:shadow-2xl">
            <img
              src="https://assets-global.website-files.com/6060bea07a71c73512f838b3/6078b1293520948b95ca043d_shutterstock_549055441-s.jpeg"
              alt="Home Goods"
              className="w-36 h-36 mx-auto mb-4 object-cover rounded-full border border-gray-200"
            />
            <h3 className="text-2xl font-semibold text-gray-900">Home Goods</h3>
          </div>
          {/* Clothing Card */}
          <div className="bg-white p-6 rounded-lg flex-1 text-center shadow-xl border border-gray-300 transition-transform transform hover:scale-105 hover:shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNsb3RoZXN8ZW58MHx8MHx8fDA%3D"
              alt="Clothing"
              className="w-36 h-36 mx-auto mb-4 object-cover rounded-full border border-gray-200"
            />
            <h3 className="text-2xl font-semibold text-gray-900">Clothing</h3>
          </div>
          {/* Books Card */}
          <div className="bg-white p-6 rounded-lg flex-1 text-center shadow-xl border border-gray-300 transition-transform transform hover:scale-105 hover:shadow-2xl">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQG0r0_9_zP_XQVli0JgYHk_oVDLbsYsB_lQ&s"
              alt="Books"
              className="w-36 h-36 mx-auto mb-4 object-cover rounded-full border border-gray-200"
            />
            <h3 className="text-2xl font-semibold text-gray-900">Books</h3>
          </div>
        </div>
      </section>
    </main>
  );
}
