import React from 'react'
import { infor } from '../assests/data.js'
import Card from './Card.jsx'

const Vendors = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {infor.map((item, index) => (
        <Card
          key={index}
          image={item.image}
          title={item.name}
          rating={item.rating}
          category={item.category}
          owner={item.owner}
          address={item.address}
          phone={item.phone}
          description={item.description}
        />
      ))}
    </div>
  )
}

export default Vendors
