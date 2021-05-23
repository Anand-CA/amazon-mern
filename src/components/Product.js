import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, selectCart } from "../features/cartSlice";

function Product({ id, title, price, rating, img }) {
  const dispatch = useDispatch();
  function ADD_TO_CART() {
    dispatch(
      addToCart({
        id: id,
        title: title,
        price: price,
        rating,
        rating,
        img: img,
      })
    );
  }
  return (
    <div className="z-10 shadow p-3 justify-between bg-white m-2 flex flex-col">
      <h2 className="line-clamp-2 font-medium font-sans">{title}</h2>
      <h2>${price}</h2>
      <h2>⭐⭐⭐⭐</h2>
      <img className="mb-3 h-32 object-contain " src={img} alt="" />
      <button
        onClick={ADD_TO_CART}
        className="bg-gradient-to-b	from-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 py-2 px-4 rounded-md font-semibold font-sans to-yellow-400"
      >
        Add to basket
      </button>
    </div>
  );
}

export default Product;
