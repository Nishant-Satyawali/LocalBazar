import React from "react";
import shop from "../assests/house.png"
import "../App.css"
const Register = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
      {/* Header */}
      <div className="flex flex-col items-center mb-8">
        <img src={shop} alt="shop" className="w-14 h-14 mb-3" />
        <h1 className="text-2xl font-bold text-gray-800">Become a Vendor</h1>
        <p className="text-gray-500 text-center">
          Join our local marketplace and connect with customers in your community
        </p>
      </div>

      {/* Card */}
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-lg">
        <h2 className="text-xl font-semibold text-gray-700 mb-1">
          Vendor Registration
        </h2>
        <p className="text-sm text-gray-500 mb-6">
          Fill out the form below to register your business
        </p>

        <form className="space-y-4">
          {/* Shop + Owner */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Shop Name
              </label>
              <input
                type="text"
                placeholder="Enter your shop name"
                className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-green-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Owner Name
              </label>
              <input
                type="text"
                placeholder="Enter owner's name"
                className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-green-500 focus:outline-none"
              />
            </div>
          </div>

          {/* Category */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Category
            </label>
            <select className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-green-500 focus:outline-none">
              <option>Select a category</option>
              <option>Food</option>
              <option>Clothing</option>
              <option>Electronics</option>
              <option>Stationery</option>
            </select>
          </div>

          {/* Address */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Address
            </label>
            <input
              type="text"
              placeholder="Enter your shop address"
              className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-green-500 focus:outline-none"
            />
          </div>

          {/* Contact */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Contact Number
            </label>
            <input
              type="text"
              placeholder="Enter your contact number"
              className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-green-500 focus:outline-none"
            />
          </div>

          {/* Shop Image */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Shop Image
            </label>
            <div className="border-2 border-dashed border-gray-300 rounded-md p-6 text-center text-gray-500">
              <p className="mb-1">Click to upload or drag and drop</p>
              <p className="text-xs">(Demo only - image upload not functional)</p>
            </div>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-md transition"
          >
            Register My Shop
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
