import React from 'react'
import { Link } from "react-router-dom";
import "../App.css"
import shoppingIcon from "../assests/shopping-store.png"
import homeIcon from "../assests/house.png"
import vendorsIcon from "../assests/cashier.png"
import registerIcon from "../assests/verify.png"
import cartIcon from "../assests/shopping-cart.png"

import { useState } from "react";
import icon from "../assests/burger.png"  // Hamburger icon
import closeIcon from "../assests/apple.png" 

const Head = () => {
    const [open, setOpen] = useState(false);
    const menuItems = ["Home", "About", "Services", "Contact"]; 
  return (
    <>
  <nav className="w-full h-auto flex justify-between items-center px-6 py-3 bg-white shadow-md ">
    
    {/* Logo Section */}
    <div className="flex items-center space-x-2">
      <img src={shoppingIcon} alt="Logo" className="w-8 h-8" />
      <span className="text-xl font-semibold text-green-600">Local Market</span>
    </div>

    {/* Navigation Links */}
    <div className="md:flex md:items-center space-x-6 hidden">
      <Link
        to="/"
        className="flex items-center space-x-2 px-4 py-2 rounded-md bg-green-600 text-white font-medium hover:bg-green-700 transition"
      >
        <img src={homeIcon} alt="Home" className="w-5 h-5" />
        <span>Home</span>
      </Link>

      <Link
        to="/vendors"
        className="flex items-center space-x-2 px-4 py-2 rounded-md text-gray-800 hover:bg-gray-100 transition"
      >
        <img src={vendorsIcon} alt="Vendors" className="w-5 h-5" />
        <span>Vendors</span>
      </Link>

      <Link
        to="/register"
        className="flex items-center space-x-2 px-4 py-2 rounded-md text-gray-800 hover:bg-gray-100 transition"
      >
        <img src={registerIcon} alt="Register" className="w-5 h-5" />
        <span>Register</span>
      </Link>

      <Link
        to="/cart"
        className="flex items-center space-x-2 px-4 py-2 rounded-md text-gray-800 hover:bg-gray-100 transition"
      >
        <img src={cartIcon} alt="Cart" className="w-5 h-5" />
        <span>Cart</span>
      </Link>
    </div>

    
    


    <div className="block md:hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-8 h-8 focus:outline-none"
      >
        <img src={open ? closeIcon : icon} alt="menu" className="w-full h-full" />
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-lg">
          <ul className="flex flex-col">
            {menuItems.map((item, index) => (
              <li
                key={index}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>




  </nav>
</>

  )
}

export default Head