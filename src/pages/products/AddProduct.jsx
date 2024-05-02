import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const AddProductForm = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [stock, setStock] = useState("");
  const [cost, setCost] = useState("");

  const formData = { name, price, description, stock, cost };
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      console.log(formData);
      console.log(JSON.stringify(formData));

      const response = await fetch("http://localhost:4000/merchant/product", {
        method: "POST",
        headers: {
          token: localStorage.getItem("token"),
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, price, description, stock, cost }),
      });
      setName("");
      setPrice("");
      setDescription("");
      navigate("/product");
      alert("product added successfully");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-red-300">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg px-10 py-8 max-w-lg"
      >
        <h2 className="text-3xl font-semibold text-center mb-6 text-gray-800">
          Add New product
        </h2>
        <div className="mb-6">
          <label
            className="block text-sm font-semibold text-gray-700 mb-2"
            htmlFor="name"
          >
            Productname
          </label>
          <input
            className="w-full px-4 py-2 text-gray-700 bg-gray-200 rounded-lg focus:outline-none focus:bg-white focus:border-blue-500"
            id="name"
            type="text"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-sm font-semibold text-gray-700 mb-2"
            htmlFor="price"
          >
            price
          </label>
          <input
            className="w-full px-4 py-2 text-gray-700 bg-gray-200 rounded-lg focus:outline-none focus:bg-white focus:border-blue-500"
            id="price"
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-sm font-semibold text-gray-700 mb-2"
            htmlFor="description"
          >
            description
          </label>
          <input
            className="w-full px-4 py-2 text-gray-700 bg-gray-200 rounded-lg focus:outline-none focus:bg-white focus:border-blue-500"
            id="description"
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-sm font-semibold text-gray-700 mb-2"
            htmlFor="Stock"
          >
            Stock
          </label>
          <input
            className="w-full px-4 py-2 text-gray-700 bg-gray-200 rounded-lg focus:outline-none focus:bg-white focus:border-blue-500"
            id="Stock"
            type="text"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
            required
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-sm font-semibold text-gray-700 mb-2"
            htmlFor="Cost"
          >
            Cost
          </label>
          <input
            className="w-full px-4 py-2 text-gray-700 bg-gray-200 rounded-lg focus:outline-none focus:bg-white focus:border-blue-500"
            id="Cost"
            type="text"
            value={cost}
            onChange={(e) => setCost(e.target.value)}
            required
          />
        </div>
        <div className="flex justify-center">
          <button
            className="bg-gradient-to-br from-blue-500 via-purple-600 to-pink-700 text-white font-semibold py-2 px-8 rounded-lg focus:outline-none focus:shadow-outline transition duration-300"
            type="submit"
          >
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProductForm;
