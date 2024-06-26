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

  const handleDelete = async (userId) => {
    try {
      console.log(userId,"deleting");
      const response = await fetch(
        `http://localhost:4000/merchant/customer/${userId}`,
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
      console.log(users, userId);
      // Filter out the deleted user from the state
      setUsers(users.filter((user) => user._id !== userId));
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Customers</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {users.map((user) => (
          <div
            key={user.id}
            className="bg-white shadow-md rounded-lg p-4 flex flex-col"
          >
            <div className="flex justify-between items-center mb-4">
              <div>
                <h2 className="text-lg font-bold">{user.name}</h2>
                <p className="text-gray-500">{user.email}</p>
              </div>
              <div>
                <button
                  onClick={() => handleDelete(user._id)}
                  className="bg-red-500 text-white px-4 py-2 rounded-md mr-2"
                >
                  Delete
                </button>
                <Link to={`/Updatecustomer/${user._id}`}>
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
        <Link to="/addcustomer">
          <button className="text-4xl p-6 rounded-full bg-red-500 text-white">
            +
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Customers;
