import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../style/AdminContact.css";
import { useNavigate } from "react-router-dom";

const ContactUsList = () => {
  const [contacts, setContacts] = useState([]);

  const navigate = useNavigate();

  // Fetch all contact messages
  const fetchContacts = async () => {
    try {
      const response = await fetch("https://medicine-store-backend.onrender.com/contacts");
      if (!response.ok) throw new Error("Failed to fetch data");
      const data = await response.json();
      setContacts(data);
    } catch (error) {
      toast.error("❌ Error fetching contacts!", {
        position: "top-center",
        autoClose: 2000,
        theme: "colored",
      });
    }
  };

  // Delete a contact message
  const handleDelete = async (id) => {
    try {
      const response = await fetch(`https://medicine-store-backend.onrender.com/contacts/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) throw new Error("Failed to delete");

      setContacts(contacts.filter((contact) => contact._id !== id));
      toast.success("🗑️ Deleted successfully!", {
        position: "top-center",
        autoClose: 2000,
        theme: "colored",
      });
      navigate("/adminpharma/contactdata");
    } catch (error) {
      toast.error("❌ Error deleting contact!", {
        position: "top-center",
        autoClose: 2000,
        theme: "colored",
      });
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <div className="container">
      <h2>Contact Messages</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Message</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.length > 0 ? (
            contacts.map((contact) => (
              <tr key={contact._id}>
                <td>
                  {contact.firstName} {contact.lastName}
                </td>
                <td>{contact.email}</td>
                <td>{contact.phone}</td>
                <td>{contact.message}</td>
                <td>
                  <button onClick={() => handleDelete(contact._id)}>
                    🗑️ Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">No messages found</td>
            </tr>
          )}
        </tbody>
      </table>
      <ToastContainer />
    </div>
  );
};

export default ContactUsList;
