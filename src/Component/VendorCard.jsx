import React from 'react'
import { Star, MapPin } from "lucide-react"; // icons
const VendorCard = ({ image, name, category, address, rating }) => {
 return (
    <div className="border rounded-lg shadow-sm bg-white w-80 flex-shrink-0">
      {/* Image */}
      <div className="h-40 w-full bg-gray-100 flex items-center justify-center rounded-t-lg">
        {image ? (
          <img src={image} alt={name} className="h-full w-full object-cover rounded-t-lg" />
        ) : (
          <span className="text-gray-400">No Image</span>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="flex justify-between items-center">
          <h3 className="font-semibold text-lg">{name}</h3>
          <div className="flex items-center text-orange-500 text-sm">
            <Star size={16} className="fill-orange-500" />
            <span className="ml-1">{rating}</span>
          </div>
        </div>

        <p className="text-gray-500 text-sm">{category}</p>

        <div className="flex items-center text-gray-500 text-sm mt-2">
          <MapPin size={16} className="mr-1" />
          <span>{address}</span>
        </div>

        <button className="w-full mt-4 bg-green-600 hover:bg-green-700 text-white font-medium py-2 rounded-lg">
          Visit Shop
        </button>
      </div>
    </div>
  );
};

export default VendorCard