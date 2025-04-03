import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "../style/AdminProducts.css";

const AddProduct = () => {
  const [products, setProducts] = useState([]);
  const [editProduct, setEditProduct] = useState(null);
  const [product, setProduct] = useState({
    name: "",
    disease: "",
    image: "",
    description: "",
    price: "",
  });

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:5000/products");
      setProducts(response.data);
    } catch (error) {
      toast.error("Failed to fetch products.");
    }
  };

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleEdit = (productId) => {
    const productToEdit = products.find((prod) => prod._id === productId);
    setProduct(productToEdit);
    setEditProduct(productId);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/products/${editProduct}`, product);
      toast.success("✅ Updated successfully!", {
        position: "top-center",
        autoClose: 2000,
        theme: "colored",
      });
      fetchProducts();
      setEditProduct(null);
      setProduct({
        name: "",
        disease: "",
        image: "",
        description: "",
        price: "",
      });
    } catch (error) {
      toast.error("❌ Failed to update product!", {
        position: "top-center",
        autoClose: 3000,
        theme: "colored",
      });
    }
  };

  const handleDelete = async (productId) => {
    try {
      await axios.delete(`http://localhost:5000/products/${productId}`);
      toast.success("✅ Deleted successfully!", {
        position: "top-center",
        autoClose: 2000,
        theme: "colored",
      });
      fetchProducts();
    } catch (error) {
      toast.error("❌ Failed to delete product!", {
        position: "top-center",
        autoClose: 3000,
        theme: "colored",
      });
    }
  };

  return (
    <div className="products-admin-container">
      <h2>{editProduct ? "Edit Product" : "Products"}</h2>

      {editProduct ? (
        <form onSubmit={handleUpdate}>
          <input
            className="products-admin-input"
            type="text"
            name="name"
            value={product.name}
            onChange={handleChange}
            placeholder="Product Name"
            required
          />
          <input
            className="products-admin-input"
            type="text"
            name="disease"
            value={product.disease}
            onChange={handleChange}
            placeholder="Disease"
            required
          />
          <input
            className="products-admin-input"
            type="text"
            name="image"
            value={product.image}
            onChange={handleChange}
            placeholder="Image URL"
            required
          />
          <textarea
            className="products-admin-textarea"
            name="description"
            value={product.description}
            onChange={handleChange}
            placeholder="Description"
            required
          />
          <input
            className="products-admin-input"
            type="number"
            name="price"
            value={product.price}
            onChange={handleChange}
            placeholder="Price"
            required
          />
          <button className="products-admin-button" type="submit">
            Update Product
          </button>
        </form>
      ) : (
        <div className="products-admin-list">
          {products.length > 0 ? (
            <ul>
              {products.map((prod) => (
                <li key={prod._id}>
                  <img src={prod.image} alt={prod.name} />
                  <div>
                    <h4>{prod.name}</h4>
                    <p>{prod.disease}</p>
                    <p>{prod.description}</p>
                    <p>Price: ₹{prod.price}</p>
                  </div>
                  <button
                    className="products-admin-edit-button"
                    onClick={() => handleEdit(prod._id)}
                  >
                    Edit
                  </button>
                  <button
                    className="products-admin-edit-button"
                    onClick={() => handleDelete(prod._id)}
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <p>No products available.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default AddProduct;
