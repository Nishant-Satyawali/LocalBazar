import React from "react";
import { useCart } from "./CartContext";

const Cart = () => {
  const { cart, removeFromCart } = useCart();

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Your Cart 🛒</h1>

      {cart.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cart.map((item, index) => (
            <div
              key={index}
              className="border rounded-lg shadow-sm bg-white p-4 flex flex-col"
            >
              {/* Image */}
              {item.image && (
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-40 w-full object-cover rounded-md mb-3"
                />
              )}

              {/* Details */}
              <h2 className="text-lg font-semibold">{item.title}</h2>
              <p className="text-sm text-gray-600">{item.price}</p>

              {/* Remove btn */}
              <button
                onClick={() => removeFromCart(item.title)}
                className="mt-4 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
