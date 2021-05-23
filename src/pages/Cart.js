import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CartProducts from "../components/CartProducts";
import { selectCart } from "../features/cartSlice";

function Cart() {
  const cart = useSelector(selectCart);
  const [total, setTotal] = useState();
  useEffect(() => {
    setTotal(
      cart.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.price;
      }, 0)
    );
  }, [cart]);

  return (
    <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row">
      {/* left */}
      <div className="flex-grow">
        {/* ad banner */}
        <div className="p-2">
          <img
            className=""
            src="https://www.sonnysangha.com/_next/image?url=https%3A%2F%2Flinks.papareact.com%2Fikj&w=1080&q=75"
            alt=""
          />
        </div>

        {/* cartProduct container */}
        <div className="bg-white m-2 shadow-sm">
          <h1 className="text-3xl mx-5 py-6 font-normal border-b font-sans">
            {cart.length === 0 ? "Shopping cart is empty 😔" : "Shopping cart"}
          </h1>
          {cart?.map((product) => (
            <CartProducts
              id={product.id}
              title={product.title}
              price={product.price}
              rating={product.rating}
              img={product.img}
            />
          ))}
        </div>
      </div>

      {/* right */}
      <div className="w-full  md:w-80 m-2 p-2 shadow flex justify-center bg-white">
        {/* contents */}
        <div className="text-center space-y-2 py-7">
          <p className="font-semibold">Subtotal( {cart.length} items ):${total}</p>
          <button className="py-2 focus:outline-none focus:ring-2 focus:ring-gray-500 rounded-sm px-3 bg-gradient-to-b from-gray-50 to-gray-400">
            Proceed to buy
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
