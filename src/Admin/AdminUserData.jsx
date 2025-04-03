import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "../style/AdminUserData.css";

const UserDetails = () => {
  const [users, setUsers] = useState([]);

  // Fetch users from the server
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:5000/admin/users");
        setUsers(response.data);
      } catch (error) {
        toast.error("Failed to fetch users.");
      }
    };

    fetchUsers();
  }, []);

  // Delete user from the server
  const handleDelete = async (userId) => {
    try {
      await axios.delete(`http://localhost:5000/admin/users/${userId}`);
      toast.success("User deleted successfully!");
      // Remove user from state without re-fetching
      setUsers(users.filter((user) => user._id !== userId));
    } catch (error) {
      toast.error("Failed to delete user");
    }
  };

  return (
    <div className="user-details-container">
      <h2>User Details</h2>
      <div className="user-details-list">
        {users.length > 0 ? (
          <ul>
            {users.map((user) => (
              <li key={user._id} className="user-details-item">
                <div className="user-details-info">
                  <h4>{user.name}</h4>
                  <p>Email: {user.email}</p>
                  <p>Phone: {user.phone}</p>
                  <p>Address: {user.address}</p>
                </div>
                <button
                  className="user-details-delete-button"
                  onClick={() => handleDelete(user._id)}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p>No users available.</p>
        )}
      </div>
    </div>
  );
};

export default UserDetails;
