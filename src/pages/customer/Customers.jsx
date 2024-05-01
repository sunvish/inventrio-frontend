import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Customers = () => {
  const [users, setUsers] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:4000/merchant/customer", {
        method: "GET",
        headers: { token: localStorage.getItem("token") },
      });
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      setUsers(data.customers);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Customers</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {users.map((user) => (
          <div key={user.id} className="bg-white shadow-md rounded-lg p-4">
            <h2 className="text-lg font-bold">{user.name}</h2>
            <p className="text-gray-500">{user.email}</p>
          </div>
        ))}
      </div>

      <div className="fixed bottom-4 right-4">
        <Link to="/addcustomer">
          <button className="text-4xl p-6 rounded-full bg-green-500 text-white">
            +
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Customers;
