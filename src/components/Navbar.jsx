// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { FiShoppingCart, FiMenu, FiX, FiUser } from "react-icons/fi";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { Link as ScrollLink } from "react-scroll";
// import { Link as RouterLink } from "react-router-dom"; // Import useHistory for redirection
// import axios from "axios";
// import "../style/Navbar.css";

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [user, setUser] = useState(null);
//   const cartItems = useSelector((state) => state.cart.cart);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchUser = async () => {
//       try {
//         const token = localStorage.getItem("token"); // Retrieve the token from localStorage

//         if (!token) {
//           setUser(null); // If no token, the user is not logged in
//           return;
//         }

//         const response = await axios.get("http://localhost:5000/auth/user", {
//           headers: {
//             Authorization: `Bearer ${token}`, // Send the token in the Authorization header
//           },
//         });

//         setUser(response.data.user); // Set user information if token is valid
//       } catch (error) {
//         setUser(null); // If error (invalid token), set user to null
//       }
//     };
//     fetchUser();
//   }, []);

//   const handleLogout = () => {
//     // Remove token from localStorage
//     localStorage.removeItem("token");

//     // Reset user state
//     setUser(null);

//     toast.success("Logout successfully!", {
//       position: "top-center", // Show in center
//       autoClose: 3000, // Close after 3 seconds
//       hideProgressBar: false,
//       closeOnClick: true,
//       pauseOnHover: false,
//       draggable: false,
//       theme: "colored",
//     });

//     // Redirect to login page
//     setTimeout(() => navigate("/login"), 1500);
//   };

//   return (
//     <nav className="navbar">
//       <div className="navbar-container">
//         <h1 className="logo">PharmaNet</h1>

//         {/* Menu for Large Screens */}
//         <ul className="nav-links">
//           <li>
//             <ScrollLink to="about" smooth={true} duration={500} offset={-100}>
//               About Us
//             </ScrollLink>
//           </li>
//           <li>
//             <ScrollLink
//               to="categories"
//               smooth={true}
//               duration={500}
//               offset={-100}
//             >
//               Categories
//             </ScrollLink>
//           </li>
//           <li>
//             <ScrollLink to="contact" smooth={true} duration={500} offset={-100}>
//               Contact Us
//             </ScrollLink>
//           </li>
//           {!user ? (
//             <>
//               <li>
//                 <RouterLink to="/login">Login</RouterLink>
//               </li>
//               <li>
//                 <RouterLink to="/register">Register</RouterLink>
//               </li>
//             </>
//           ) : (
//             <li>
//               <RouterLink
//                 to="#"
//                 onClick={handleLogout}
//                 className="profile-icon2"
//               >
//                 Logout
//               </RouterLink>
//             </li>
//           )}
//         </ul>

//         {/* Cart Icon and Profile Icon for Large Screens */}
//         <div className="right-icons">
//           <div className="cart-icon">
//             <RouterLink to="/cart" className="cart-link">
//               <FiShoppingCart size={24} />
//               {cartItems.length > 0 && (
//                 <span className="cart-item-count">{cartItems.length}</span>
//               )}
//             </RouterLink>
//           </div>
//           {user && (
//             <div className="profile-icon">
//               <RouterLink to="/profile">
//                 <FiUser size={24} />
//               </RouterLink>
//             </div>
//           )}
//         </div>

//         {/* Mobile Menu Button */}
//         <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)}>
//           {menuOpen ? <FiX size={30} /> : <FiMenu size={30} />}
//         </button>
//       </div>

//       {/* Mobile Dropdown Menu */}

//       {/* Mobile Dropdown Menu */}
//       {menuOpen && (
//         <ul className="mobile-menu">
//           <li>
//             <ScrollLink
//               to="about"
//               smooth={true}
//               duration={500}
//               offset={-100}
//               onClick={() => setMenuOpen(false)}
//             >
//               About Us
//             </ScrollLink>
//           </li>
//           <li>
//             <ScrollLink
//               to="categories"
//               smooth={true}
//               duration={500}
//               offset={-100}
//               onClick={() => setMenuOpen(false)}
//             >
//               Categories
//             </ScrollLink>
//           </li>
//           <li>
//             <ScrollLink
//               to="contact"
//               smooth={true}
//               duration={500}
//               offset={-100}
//               onClick={() => setMenuOpen(false)}
//             >
//               Contact Us
//             </ScrollLink>
//           </li>
//           {!user ? (
//             <>
//               <li>
//                 <RouterLink to="/login" onClick={() => setMenuOpen(false)}>
//                   Login
//                 </RouterLink>
//               </li>
//               <li>
//                 <RouterLink to="/register" onClick={() => setMenuOpen(false)}>
//                   Register
//                 </RouterLink>
//               </li>
//             </>
//           ) : (
//             <li>
//               <RouterLink
//                 to="#"
//                 onClick={handleLogout}
//                 className="profile-icon2"
//               >
//                 Logout
//               </RouterLink>
//             </li>
//           )}

//           {/* Add to Cart Button in Mobile Menu */}
//           <li>
//             <RouterLink to="/cart" onClick={() => setMenuOpen(false)}>
//               <FiShoppingCart size={24} />
//               {cartItems.length > 0 && (
//                 <span className="cart-item-count">{cartItems.length}</span>
//               )}
//             </RouterLink>
//           </li>
//           <li>
//             {user && (
//               <div className="profile-icon">
//                 <RouterLink to="/profile">
//                   <FiUser size={24} />
//                 </RouterLink>
//               </div>
//             )}
//           </li>
//         </ul>
//       )}
//     </nav>
//   );
// };

// export default Navbar;

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { FiShoppingCart, FiMenu, FiX, FiUser } from "react-icons/fi";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import axios from "axios";
import "../style/Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const cartItems = useSelector((state) => state.cart.cart);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem("token");

        if (!token) {
          setUser(null);
          return;
        }

        const response = await axios.get("http://localhost:5000/auth/user", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setUser(response.data.user);
      } catch (error) {
        setUser(null);
      }
    };
    fetchUser();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(null);
    toast.success("Logout successfully!", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      theme: "colored",
    });
    setTimeout(() => navigate("/login"), 1500);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="logo">PharmaNet</h1>

        <ul className="nav-links">
          <li>
            <ScrollLink to="about" smooth={true} duration={500} offset={-100}>
              About Us
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="categories"
              smooth={true}
              duration={500}
              offset={-100}
            >
              Categories
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="contact" smooth={true} duration={500} offset={-100}>
              Contact Us
            </ScrollLink>
          </li>
          {!user ? (
            <>
              <li>
                <RouterLink to="/login">Login</RouterLink>
              </li>
              <li>
                <RouterLink to="/register">Register</RouterLink>
              </li>
            </>
          ) : (
            <li>
              <RouterLink to="#" onClick={handleLogout} className="profile-icon2">
                Logout
              </RouterLink>
            </li>
          )}
        </ul>

        <div className="right-icons">
          {user && (
            <div className="cart-icon">
              <RouterLink to="/cart" className="cart-link">
                <FiShoppingCart size={24} />
                {cartItems.length > 0 && (
                  <span className="cart-item-count">{cartItems.length}</span>
                )}
              </RouterLink>
            </div>
          )}
          {user && (
            <div className="profile-icon">
              <RouterLink to="/profile">
                <FiUser size={24} />
              </RouterLink>
            </div>
          )}
        </div>

        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FiX size={30} /> : <FiMenu size={30} />}
        </button>
      </div>

      {menuOpen && (
        <ul className="mobile-menu">
          <li>
            <ScrollLink
              to="about"
              smooth={true}
              duration={500}
              offset={-100}
              onClick={() => setMenuOpen(false)}
            >
              About Us
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="categories"
              smooth={true}
              duration={500}
              offset={-100}
              onClick={() => setMenuOpen(false)}
            >
              Categories
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              offset={-100}
              onClick={() => setMenuOpen(false)}
            >
              Contact Us
            </ScrollLink>
          </li>
          {!user ? (
            <>
              <li>
                <RouterLink to="/login" onClick={() => setMenuOpen(false)}>
                  Login
                </RouterLink>
              </li>
              <li>
                <RouterLink to="/register" onClick={() => setMenuOpen(false)}>
                  Register
                </RouterLink>
              </li>
            </>
          ) : (
            <li>
              <RouterLink to="#" onClick={handleLogout} className="profile-icon2">
                Logout
              </RouterLink>
            </li>
          )}

          {user && (
            <li>
              <RouterLink to="/cart" onClick={() => setMenuOpen(false)}>
                <FiShoppingCart size={24} />
                {cartItems.length > 0 && (
                  <span className="cart-item-count">{cartItems.length}</span>
                )}
              </RouterLink>
            </li>
          )}
          {user && (
            <li>
              <div className="profile-icon">
                <RouterLink to="/profile">
                  <FiUser size={24} />
                </RouterLink>
              </div>
            </li>
          )}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
