import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex justify-center gap-8 mt-20">
      <Link to="/customers">
        <button className="px-20 py-20 bg-gray-300 text-gray-800 rounded-lg shadow-lg hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50">
          Customers
        </button>
      </Link>
      <button className="px-20 py-20 bg-gray-300 text-gray-800 rounded-lg shadow-lg hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50">
        Products
      </button>
      <button className="px-20 py-20 bg-gray-300 text-gray-800 rounded-lg shadow-lg hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50">
        Vendors
      </button>
    </div>
  );
};

export default Home;
