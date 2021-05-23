import React from "react";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../features/cartSlice";

function CartProducts({ id, title, price, rating, img }) {
  const dispatch = useDispatch();
  function REMOVE_FROM_CART() {
    dispatch(removeFromCart(id));
  }
  return (
    <div className="p-3 bg-white grid grid-cols-5 items-center">
      {/* left */}
      <div className="flex justify-center">
        <img className="mb-3 max-h-32 object-contain" src={img} alt="" />
      </div>

      {/* center */}
      <div className="col-span-3 mx-5 flex flex-col justify-start h-full">
        <h2 className="font-semibold text-lg font-sans">{title}</h2>
        <h2>${price}</h2>
        <h2>⭐⭐⭐⭐</h2>
      </div>

      {/* right */}
      <button
        onClick={REMOVE_FROM_CART}
        className="bg-gradient-to-b text-sm from-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 py-3 px-2 rounded-md font-semibold font-sans to-yellow-400"
      >
        Remove
      </button>
    </div>
  );
}

export default CartProducts;
