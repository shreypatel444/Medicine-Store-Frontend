import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./SliceCart"; // Import cart slice

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
