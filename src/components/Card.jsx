// // import { useState } from "react";
// // import "../style/Card.css";
// // import pic1 from "../assets/pic1.jpg";
// // import pic2 from "../assets/pic2.jpg";
// // import pic3 from "../assets/pic3.jpg";
// // import pic4 from "../assets/pic4.jpg";
// // import { useNavigate } from "react-router-dom";

// // const diseases = [
// //   { id: 1, title: "Tuberculosis", image: pic1, path: "/tuberculosis" },
// //   { id: 2, title: "Diabetes", image: pic2, path: "/diabetes" },
// //   { id: 3, title: "Cancer", image: pic3, path: "/cancer" },
// //   { id: 4, title: "Alzheimer’s Disease", image: pic4, path: "/alzheimers" },
// //   { id: 5, title: "Skin Care", image: pic4, path: "/skin-care" },
// //   { id: 6, title: "Pain Relief", image: pic2, path: "/pain-relief" },
// //   { id: 7, title: "Allergy", image: pic1, path: "/allergy" },
// //   { id: 8, title: "Eye Care", image: pic2, path: "/eye-care" },
// // ];

// // const Card = () => {
// //   const [selectedDevice, setSelectedDevice] = useState(null);

// //   const handleClick = (device) => {
// //     setSelectedDevice(device);
// //   };

// //   const handleMove = (path) => {
// //     navigate(path);
// //   };

// //   const navigate = useNavigate();

// //   return (
// //     <>
// //       <div className="card-container" id="categories">
// //         <p className="heading">Categories</p>
// //         <div className="card-list">
// //           {diseases.map((disease) => (
// //             <div key={disease.id} className="card">
// //               <img
// //                 src={disease.image}
// //                 alt={disease.title}
// //                 className="card-image"
// //               />
// //               <div className="card-info">
// //                 <h3 className="card-title">{disease.title}</h3>
// //                 <button className="btn"  onClick={() => handleMove(disease.path)}>
// //                   Medicines
// //                 </button>
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </>
// //   );
// // };

// // export default Card;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import "../style/Card.css";

// const Card = () => {
//   const [products, setProducts] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await axios.get("http://localhost:5000/products");
//         setProducts(response.data); // Set fetched products
//       } catch (error) {
//         console.error("Error fetching products:", error);
//       }
//     };

//     fetchProducts();
//   }, []); // Fetch products when the component mounts

//   const handleMove = (path) => {
//     navigate(path); // Navigate to specific disease category
//   };

//   return (
//     <div className="card-container" id="categories">
//       <p className="heading">Categories</p>
//       <div className="card-list">
//         {products.map((product) => (
//           <div key={product._id} className="card">
//             <img
//               src={product.image}
//               alt={product.name}
//               className="card-image"
//             />
//             <div className="card-info">
//               <h3 className="card-title">{product.disease}</h3>
//               <button
//                 className="btn"
//                 onClick={() => handleMove(`/${product.disease}`)}
//               >
//                 Medicines
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Card;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../style/Card.css";

const Card = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleMove = (path) => {
    navigate(path);
  };

  if (loading) {
    return (
      <>
        <p className="heading">Categories</p>
        <div className="loader">Loading...</div>;
      </>
    );
  }

  if (error) {
    return (
      <>
        <p className="heading">Categories</p>
        <div className="error">Failed to fetch products. Try again later.</div>
      </>
    );
  }

  return (
    <div className="card-container" id="categories">
      <p className="heading">Categories</p>
      <div className="card-list">
        {products.map((product) => (
          <div key={product._id} className="card">
            <img
              src={product.image}
              alt={product.name}
              className="card-image"
            />
            <div className="card-info">
              <h3 className="card-title">{product.disease}</h3>
              <button
                className="btn"
                onClick={() => handleMove(`/${product.disease}`)}
              >
                Medicines
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
