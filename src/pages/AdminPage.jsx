import React from "react";
import AdminNavbar from "../Admin/AdminNavbar";
import "../style/AdminPage.css"; // Import the CSS file

export default function AdminPage() {
  return (
    <>
      <AdminNavbar />
      <div className="admin-container">
        <h1>Welcome, Admin!</h1>
      </div>
    </>
  );
}
