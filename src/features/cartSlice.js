import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  searchTerm: "",
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cart = [...state.cart, action.payload];
    },
    removeFromCart: (state, action) => {
      const index = state.cart.findIndex(
        (product) => product.id === action.payload
      );
      const newCart = [...state.cart];
      newCart.splice(index, 1);
      state.cart = newCart;
    },
    SearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
  },
});

export const { addToCart, removeFromCart,SearchTerm } = cartSlice.actions;

export const selectCart = (state) => state.cart.cart;
export const selectSearchTerm = (state) => state.cart.searchTerm;
export default cartSlice.reducer;
