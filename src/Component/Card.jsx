import React from 'react'

const Card = ({ 
  image, 
  title, 
  rating, 
  category, 
  owner, 
  address, 
  phone, 
  description
}) => {
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
        {/* Title + Rating */}
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
          <div className="flex items-center text-orange-500 font-semibold">
            ★ <span className="ml-1 text-gray-700">{rating}</span>
          </div>
        </div>

        {/* Category */}
        <p className="text-green-600 text-sm font-medium mt-1">{category}</p>

        {/* Info */}
        <div className="mt-3 space-y-2 text-gray-600 text-sm">
          <div className="flex items-center gap-2">
            <span>👤</span> <span>{owner}</span>
          </div>
          <div className="flex items-center gap-2">
            <span>📍</span> <span>{address}</span>
          </div>
          <div className="flex items-center gap-2">
            <span>📞</span> <span>{phone}</span>
          </div>
        </div>

        {/* Description */}
        <p className="mt-3 text-gray-500 text-sm">{description}</p>

        {/* Buttons */}
        <div className="flex items-center gap-2 mt-4">
          <button className="flex-1 bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-lg">
            Visit Shop
          </button>
          <button className="p-2 border rounded-lg hover:bg-gray-100">
            📞
          </button>
        </div>
      </div>
    </div>
  )
}

export default Card

