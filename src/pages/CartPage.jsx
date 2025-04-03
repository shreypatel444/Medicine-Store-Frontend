import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart, removeFromCart, clearCart } from "../ReduxStore/SliceCart"; // Import Redux actions
import "../style/CartPage.css";

const CartPage = () => {
  const cart = useSelector((state) => state.cart.cart);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.productId} className="cart-item">
              <h3 className="cart-item-name">{item.name}</h3>

              {/* Add & Remove Buttons */}
              <div className="cart-buttons">
                <button
                  className="cart-btn remove"
                  onClick={() => dispatch(removeFromCart(item.productId))}
                >
                  -
                </button>
                <p className="cart-item-quantity">
                  <strong>{item.quantity}</strong>
                </p>
                <button
                  className="cart-btn"
                  onClick={() => dispatch(addToCart(item))}
                >
                  +
                </button>
              </div>

              <p className="cart-item-price">Unit Price: ₹{item.price}</p>
              <p className="cart-item-total">
                Total: ₹{item.price * item.quantity}
              </p>
            </div>
          ))}

          <h3 className="cart-total">Total Price: ₹{totalPrice}</h3>

          {/* Clear Cart Button */}
          <button
            className="cart-clear-btn"
            onClick={() => dispatch(clearCart())}
          >
            🗑 Clear Cart
          </button>

          {/* Back Button */}
          <button className="cart-back-btn" onClick={() => navigate(-1)}>
            ← Back to Shop
          </button>

          <button className="cart-pay-btn" onClick={() => navigate("/payment")}>
            💳 Pay Now
          </button>
        </div>
      )}
    </div>
  );
};

export default CartPage;
