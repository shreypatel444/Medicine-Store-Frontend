// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import "../style/ProfilePage.css"; // Import custom CSS

// const Profile = () => {
//   const [user, setUser] = useState({
//     name: "",
//     email: "",
//     address: "",
//   });

//   const navigate = useNavigate(); // Initialize navigate function

//   // Function to navigate back to home
//   const handleBackToHome = () => {
//     navigate("/");
//   };

//   const [isEditing, setIsEditing] = useState(false);
//   const [updatedData, setUpdatedData] = useState({ name: "", address: "" });

//   const fetchUserData = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       const response = await axios.get("http://localhost:5000/api/profile", {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setUser(response.data);
//       setUpdatedData({
//         name: response.data.name,
//         address: response.data.address,
//       });
//     } catch (error) {
//       toast.error("Failed to fetch user data");
//     }
//   };

//   useEffect(() => {
//     fetchUserData();
//   }, []);

//   const handleEdit = () => setIsEditing(true);

//   const handleSave = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       await axios.put(
//         "http://localhost:5000/api/profile/update",
//         { name: updatedData.name, address: updatedData.address },
//         { headers: { Authorization: `Bearer ${token}` } }
//       );

//       toast.success("Profile updated successfully!", {
//         position: "top-center", // Show in center
//         autoClose: 3000, // Close after 3 seconds
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: false,
//         draggable: false,
//         theme: "colored",
//       });

//       setIsEditing(false);

//       // Fetch updated user data after successful update
//       fetchUserData();
//     } catch (error) {
//       toast.error("Failed to update profile", {
//         position: "top-center",
//       });
//     }
//   };

//   return (
//     <div className="profile-container">
//       <h2 className="profile-title">My Profile</h2>

//       <div className="profile-card">
//         <div className="profile-field">
//           <label>Name:</label>
//           {isEditing ? (
//             <input
//               type="text"
//               value={updatedData.name}
//               onChange={(e) =>
//                 setUpdatedData({ ...updatedData, name: e.target.value })
//               }
//               className="profile-input"
//             />
//           ) : (
//             <p>{user.name}</p>
//           )}
//         </div>

//         <div className="profile-field">
//           <label>Email:</label>
//           <p>{user.email}</p> {/* Email is non-editable */}
//         </div>

//         <div className="profile-field">
//           <label>Address:</label>
//           {isEditing ? (
//             <input
//               type="text"
//               value={updatedData.address}
//               onChange={(e) =>
//                 setUpdatedData({ ...updatedData, address: e.target.value })
//               }
//               className="profile-input"
//             />
//           ) : (
//             <p>{user.address}</p>
//           )}
//         </div>

//         {isEditing ? (
//           <button className="save-btn" onClick={handleSave}>
//             Save Changes
//           </button>
//         ) : (
//           <button className="edit-btn" onClick={handleEdit}>
//             Edit Profile
//           </button>
//         )}
//         <button className="home-btn" onClick={handleBackToHome}>
//           Back to Home
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Profile;


import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../style/ProfilePage.css"; // Import custom CSS

const Profile = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    address: "",
    isAdmin: false,
  });

  const navigate = useNavigate(); // Initialize navigate function

  // Function to navigate back to home
  const handleBackToHome = () => {
    navigate("/");
  };

  const handleAdminPanel = () => {
    navigate("/adminpharma");
  };

  const [isEditing, setIsEditing] = useState(false);
  const [updatedData, setUpdatedData] = useState({ name: "", address: "" });

  const fetchUserData = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get("http://localhost:5000/api/profile", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUser(response.data);
      setUpdatedData({
        name: response.data.name,
        address: response.data.address,
      });
    } catch (error) {
      toast.error("Failed to fetch user data");
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const handleEdit = () => setIsEditing(true);

  const handleSave = async () => {
    try {
      const token = localStorage.getItem("token");
      await axios.put(
        "http://localhost:5000/api/profile/update",
        { name: updatedData.name, address: updatedData.address },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      toast.success("Profile updated successfully!", {
        position: "top-center", // Show in center
        autoClose: 3000, // Close after 3 seconds
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: "colored",
      });

      setIsEditing(false);

      // Fetch updated user data after successful update
      fetchUserData();
    } catch (error) {
      toast.error("Failed to update profile", {
        position: "top-center",
      });
    }
  };

  return (
    <div className="profile-container">
      <h2 className="profile-title">My Profile</h2>

      <div className="profile-card">
        <div className="profile-field">
          <label>Name:</label>
          {isEditing ? (
            <input
              type="text"
              value={updatedData.name}
              onChange={(e) =>
                setUpdatedData({ ...updatedData, name: e.target.value })
              }
              className="profile-input"
            />
          ) : (
            <p>{user.name}</p>
          )}
        </div>

        <div className="profile-field">
          <label>Email:</label>
          <p>{user.email}</p> {/* Email is non-editable */}
        </div>

        <div className="profile-field">
          <label>Address:</label>
          {isEditing ? (
            <input
              type="text"
              value={updatedData.address}
              onChange={(e) =>
                setUpdatedData({ ...updatedData, address: e.target.value })
              }
              className="profile-input"
            />
          ) : (
            <p>{user.address}</p>
          )}
        </div>

        {isEditing ? (
          <button className="save-btn" onClick={handleSave}>
            Save Changes
          </button>
        ) : (
          <button className="edit-btn" onClick={handleEdit}>
            Edit Profile
          </button>
        )}
        {user.isAdmin && (
          <button className="admin-btn" onClick={handleAdminPanel}>
            Admin Panel
          </button>
        )}
        <button className="home-btn" onClick={handleBackToHome}>
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default Profile;
