import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { AiOutlineSearch } from "react-icons/ai";
import { selectCart } from "../features/cartSlice";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Header() {
  const cart = useSelector(selectCart);
  return (
    <div className="sticky top-0 z-20 flex space-x-4 px-3 justify-between text-white items-center h-16 bg-gray-900">
      {/* logo */}
      <div>
        <Link to="/">
          <img
            className="h-8 object-contain"
            src="https://cdn.worldvectorlogo.com/logos/amazon-com-light.svg"
            alt=""
          />
        </Link>
      </div>

      {/* search */}
      <div className="hidden md:flex items-center flex-grow rounded-md overflow-hidden h-4/6  ">
        <input
          className="text-black h-full flex-grow outline-none p-3"
          type="text"
        />
        <AiOutlineSearch
          fontSize={37}
          className="text-black bg-yellow-400 h-full p-1"
        />
      </div>

      {/* menu */}
      <div className="flex space-x-5 text-sm font-semibold justify-items-end   items-center">
        <div className="cursor-pointer">
          <p className="text-xs">Sign in </p>
          <p className="text-base font-bold">Account & list</p>
        </div>
        <div className="cursor-pointer">
          <p className="text-xs">Returns </p>
          <p className="font-bold text-base">& Orders</p>
        </div>
        <div className=" relative cursor-pointer pr-2">
          <Link to="/cart">
            <div className="cursor-pointer absolute top-0 right-0 flex items-center justify-center rounded-full bg-yellow-400 h-4 w-4">
              <span className="text-black text-sm mb-0.5">{cart.length}</span>
            </div>

            <FiShoppingCart fontSize={30} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
