// import React, { useEffect, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { addToCart, removeFromCart } from "../ReduxStore/SliceCart";
// import "../style/MedicineCss.css";
// import { IoMdAdd, IoMdRemove } from "react-icons/io";
// import axios from "axios";

// const MedicineDetails = () => {
//   const { disease } = useParams();
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const [medicine, setMedicine] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchMedicine = async () => {
//       try {
//         const response = await axios.get(`http://localhost:5000/products/${disease}`);
//         if (response.data.length > 0) {
//           setMedicine(response.data[0]);
//         } else {
//           setMedicine(null);
//         }
//       } catch (err) {
//         setError("Error fetching medicine details.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchMedicine();
//   }, [disease]);

//   const cart = useSelector((state) => state.cart.cart);
//   const cartItem = cart.find((item) => item.productId === medicine?.productId);
//   const quantity = cartItem?.quantity || 0;

//   if (loading) return <h2>Loading...</h2>;
//   if (error) return <h2>{error}</h2>;
//   if (!medicine) return <h2>No Medicine Found for {disease}</h2>;

//   return (
//     <div className="medicine-container">
//       <div className="medicine-image">
//         <img src={medicine.image} alt={medicine.name} loading="lazy" />
//       </div>

//       <div className="medicine-info">
//         <h2 className="medicine-title">{medicine.name}</h2>
//         <h3 className="disease-name">For: {medicine.disease}</h3>
//         <p className="medicine-description">{medicine.description}</p>
//         <p className="medicine-price">
//           Price: <strong>₹{medicine.price}</strong>
//         </p>

//         <div className="button-group">
//           <button className="AddToCartBtn" onClick={() => dispatch(addToCart(medicine))}>
//             <IoMdAdd />
//           </button>

//           <button
//             className="RemoveFromCartBtn"
//             onClick={() => dispatch(removeFromCart(medicine.productId))}
//             disabled={quantity === 0}
//           >
//             <IoMdRemove />
//           </button>

//           <button className="GoToCartBtn" onClick={() => navigate("/cart")}>
//             🛒 {quantity > 0 && <span className="cart-count">({quantity})</span>}
//           </button>

//           <button className="back-btn" onClick={() => navigate(-1)}>
//             ← Back to Health Sections
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MedicineDetails;

import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../ReduxStore/SliceCart";
import "../style/MedicineCss.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IoMdAdd, IoMdRemove } from "react-icons/io";
import axios from "axios";

const MedicineDetails = () => {
  const { disease } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [medicine, setMedicine] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMedicine = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/products/${disease}`
        );
        if (response.data.length > 0) {
          setMedicine(response.data[0]);
        } else {
          setMedicine(null);
        }
      } catch (err) {
        setError("Error fetching medicine details.");
      } finally {
        setLoading(false);
      }
    };

    fetchMedicine();
  }, [disease]);

  const cart = useSelector((state) => state.cart.cart);
  const cartItem = cart.find((item) => item.productId === medicine?.productId);
  const quantity = cartItem?.quantity || 0;

  // Check if the user is logged in
  const isUserLoggedIn = localStorage.getItem("token");

  const handleAddToCart = () => {
    console.log("handleAddToCart called"); // Debugging log
    if (!isUserLoggedIn) {
      console.log("User not logged in"); // Debugging log
      toast.error("⚠️ Please log in to add medicines to your cart!", {
        position: "top-center",
        autoClose: 3000,
        theme: "colored",
      });
      navigate("/login");
      return;
    }

    dispatch(addToCart(medicine));
    console.log("Medicine added to cart"); // Debugging log
    toast.success("Added to cart successfully!", { autoClose: 3000 });
  };

  const handleRemoveFromCart = () => {
    if (quantity > 0) {
      dispatch(removeFromCart(medicine.productId));
    }
  };

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>{error}</h2>;
  if (!medicine) return <h2>No Medicine Found for {disease}</h2>;

  return (
    <div className="medicine-container">
      <div className="medicine-image">
        <img src={medicine.image} alt={medicine.name} loading="lazy" />
      </div>

      <div className="medicine-info">
        <h2 className="medicine-title">{medicine.name}</h2>
        <h3 className="disease-name">For: {medicine.disease}</h3>
        <p className="medicine-description">{medicine.description}</p>
        <p className="medicine-price">
          Price: <strong>₹{medicine.price}</strong>
        </p>

        <div className="button-group">
          <button className="AddToCartBtn" onClick={handleAddToCart}>
            <IoMdAdd />
          </button>

          <button
            className="RemoveFromCartBtn"
            onClick={handleRemoveFromCart}
            disabled={quantity === 0}
          >
            <IoMdRemove />
          </button>

          <button className="GoToCartBtn" onClick={() => navigate("/cart")}>
            🛒{" "}
            {quantity > 0 && <span className="cart-count">({quantity})</span>}
          </button>

          <button className="back-btn" onClick={() => navigate(-1)}>
            ← Back to Health Sections
          </button>
        </div>
      </div>
    </div>
  );
};

export default MedicineDetails;
