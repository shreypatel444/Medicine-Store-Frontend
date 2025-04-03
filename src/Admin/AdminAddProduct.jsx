import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "../style/AdminAddProduct.css";

const AdminAddProduct = () => {
  const [product, setProduct] = useState({
    name: "",
    disease: "",
    image: "",
    description: "",
    price: "",
  });

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/products", product);
      toast.success("Product added successfully!");
      setProduct({
        name: "",
        disease: "",
        image: "",
        description: "",
        price: "",
      });
    } catch (error) {
      toast.error("Failed to add product");
    }
  };

  return (
    <div className="add-admin-product-container">
      <h2>Add New Product</h2>
      <form onSubmit={handleSubmit}>
        <input
          className="admin-product-name"
          type="text"
          name="name"
          value={product.name}
          onChange={handleChange}
          placeholder="Product Name"
          required
        />
        <input
          className="admin-product-disease"
          type="text"
          name="disease"
          value={product.disease}
          onChange={handleChange}
          placeholder="Disease"
          required
        />
        <input
          className="admin-product-image"
          type="text"
          name="image"
          value={product.image}
          onChange={handleChange}
          placeholder="Image URL"
          required
        />
        <textarea
          className="admin-product-description"
          name="description"
          value={product.description}
          onChange={handleChange}
          placeholder="Description"
          required
        />
        <input
          className="admin-product-price"
          type="number"
          name="price"
          value={product.price}
          onChange={handleChange}
          placeholder="Price"
          required
        />
        <button className="admin-product-submit" type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AdminAddProduct;
