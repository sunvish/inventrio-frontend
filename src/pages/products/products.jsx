import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProductFunction = () => {
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:4000/merchant/product", {
        method: "GET",
        headers: { token: localStorage.getItem("token") },
      });
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      setProducts(data.products);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (productId) => {
    try {
      console.log(productId, "deleting");
      const response = await fetch(
        `http://localhost:4000/merchant/product/${productId}`,
        {
          method: "DELETE",
          headers: {
            token: localStorage.getItem("token"),
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        throw new Error("Failed to delete user");
      }

      // Filter out the deleted user from the state
      setProducts(products.filter((product) => product._id !== productId));
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <div
            key={product._id}
            className="bg-white shadow-md rounded-lg p-4 flex flex-col"
          >
            <div className="flex justify-between items-center mb-4">
              <div>
                <h2 className="text-lg font-bold">{product.name}</h2>
                <p className="text-gray-500">{product.description}</p>
              </div>
              <div>
                <button
                  onClick={() => handleDelete(product._id)}
                  className="bg-red-500 text-white px-4 py-2 rounded-md mr-2"
                >
                  Delete
                </button>
                <Link to={`/Updatecustomer/${product._id}`}>
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
                    Edit
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="fixed bottom-4 right-4">
        <Link to="/addproduct">
          <button className="text-4xl p-6 rounded-full bg-red-500 text-white">
            +
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProductFunction;
