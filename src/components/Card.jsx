

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
        const response = await axios.get("https://medicine-store-backend.onrender.com/products");
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
