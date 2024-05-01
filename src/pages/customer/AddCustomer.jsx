import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const AddCustomerForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const formData = { name, email, phoneNumber };
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      console.log(formData);
      console.log(JSON.stringify(formData));

      const response = await fetch("http://localhost:4000/merchant/customer", {
        method: "POST",
        headers: {
          token: localStorage.getItem("token"),
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, phoneNumber }),
      });
      setName("");
      setEmail("");

      setPhoneNumber("");
      navigate("/customers");
      alert("customer created successfully");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-400 via-purple-500 to-pink-600">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg px-10 py-8 max-w-lg"
      >
        <h2 className="text-3xl font-semibold text-center mb-6 text-gray-800">
          Add New Customer
        </h2>
        <div className="mb-6">
          <label
            className="block text-sm font-semibold text-gray-700 mb-2"
            htmlFor="name"
          >
            Name
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
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="w-full px-4 py-2 text-gray-700 bg-gray-200 rounded-lg focus:outline-none focus:bg-white focus:border-blue-500"
            id="email"
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-sm font-semibold text-gray-700 mb-2"
            htmlFor="phoneNumber"
          >
            Phone Number
          </label>
          <input
            className="w-full px-4 py-2 text-gray-700 bg-gray-200 rounded-lg focus:outline-none focus:bg-white focus:border-blue-500"
            id="phoneNumber"
            type="tel"
            placeholder="Enter phone number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </div>
        <div className="flex justify-center">
          <button
            className="bg-gradient-to-br from-blue-500 via-purple-600 to-pink-700 text-white font-semibold py-2 px-8 rounded-lg focus:outline-none focus:shadow-outline transition duration-300"
            type="submit"
          >
            Add Customer
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCustomerForm;
