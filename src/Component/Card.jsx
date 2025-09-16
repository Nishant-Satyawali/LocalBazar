import React from "react";
import { useCart } from "./CartContext";
import "../App.css"

const Card = ({ image, title, rating, category, owner, address, phone, description }) => {
  const { addToCart } = useCart();

  return (
    <div className="max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden border">
      {/* Image */}
      <div className="h-40 bg-gray-100 flex items-center justify-center">
        {image ? (
          <img src={image} alt={title} className="h-full w-full object-cover" />
        ) : (
          <span className="text-gray-400">Image</span>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
          <div className="flex items-center text-orange-500 font-semibold">
            ★ <span className="ml-1 text-gray-700">{rating}</span>
          </div>
        </div>

        <p className="text-green-600 text-sm font-medium mt-1">{category}</p>

        <p className="mt-3 text-gray-500 text-sm">{description}</p>

        {/* Buttons */}
        <div className="flex items-center gap-2 mt-4">
          <button 
            className="flex-1 bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-lg"
            onClick={() => addToCart({ title, image, price: "N/A" })}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
