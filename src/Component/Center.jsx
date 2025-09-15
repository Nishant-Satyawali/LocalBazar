import VendorCard from "./VendorCard.jsx"
import fruits from "../assests/apple.png"
import clothes from "../assests/shirt.png"
import stationery from "../assests/drawing-tools.png"
import food from "../assests/burger.png"


"use client";

import React from "react";

import { motion } from "framer-motion";
import { Autoplay, EffectCards,EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-cards";

const Center = () => {
  const vendors = [
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-owGBhU3p_rVyKt-63IXAAA4r6PAUwbTfpg&s", 
      name: "Fresh Farm Produce",
      category: "Fruits",
      address: "123 Market Street",
      rating: 4.8,
    },
    {
      image: "https://images.pexels.com/photos/325876/pexels-photo-325876.jpeg?cs=srgb&dl=pexels-pixabay-325876.jpg&fm=jpg",
      name: "Cozy Clothing Co.",
      category: "Clothes",
      address: "456 Fashion Ave",
      rating: 4.8,
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWGYpV6P0yq2SAp4l4yUmaSFIiDOTwQcYcLg&s",
      name: "Paper & Pen Paradise",
      category: "Stationery",
      address: "789 Writer's Way",
      rating: 4.8,
    },
    
    {
  image: "https://t4.ftcdn.net/jpg/03/64/41/07/360_F_364410756_Ev3WoDfNyxO9c9n4tYIsU5YBQWAP3UF8.jpg",
  name: "Tech Haven",
  category: "Electronics",
  address: "123 Silicon Street",
  rating: 4.6,
},
{
  image: "https://platform.vox.com/wp-content/uploads/sites/2/2025/02/groceryshopping.jpg?quality=90&strip=all&crop=16.666666666667,0,66.666666666667,100",
  name: "Green Basket",
  category: "Groceries",
  address: "456 Fresh Market Ave",
  rating: 4.3,
},
{
  image: "https://www.yellowbrick.co/wp-content/uploads/2023/02/Streetwear-style.jpg",
  name: "Style Streetwear",
  category: "Clothing",
  address: "101 Trendy Lane",
  rating: 4.5,
},
{
  image: "https://tb-static.uber.com/prod/image-proc/processed_images/fa7b905bfc2c66fcbc078f6bcfc1b907/9e31c708e4cf73b6e3ea1bd4a9b6e16b.jpeg",
  name: "Fresh Bite Deli",
  category: "Food",
  address: "202 Flavor Avenue",
  rating: 4.7,
},
{
  image: "https://greenfreshflorals.com/cdn/shop/files/Flower_Wall_at_San_Diego_Flower_and_Plant_Shop_Green_Fresh_Florals_Plants.jpg?v=1666729900&width=1080",
  name: "Bloom & Bliss",
  category: "Flowers",
  address: "303 Garden Street",
  rating: 4.6,
},

  ];


  return (
    <div>
        <div className="w-screen h-auto py-36 flex flex-col justify-center items-center bg-gradient-to-r from-green-500 to-green-400 text-white px-4 text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        Support Local, Shop Local
      </h1>
      <p className="text-lg md:text-xl mb-8 max-w-2xl">
        Discover amazing local vendors in your community. From fresh produce to handcrafted goods, find everything you need while supporting local businesses.
      </p>
      <div className="flex gap-4">
        <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-lg transition duration-300">
          Browse Vendors &rarr;
        </button>
        <button className="border border-white hover:bg-white hover:text-green-500 text-white font-semibold py-2 px-6 rounded-lg transition duration-300">
          Become a Vendor
        </button>
      </div>
        </div>

         <div className="w-full flex flex-col items-center py-10">
  <h2 className="text-2xl font-bold mb-8">Shop by Category</h2>
  
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-5xl">
    
    <div className="flex flex-col items-center justify-center border rounded-xl p-6 hover:shadow-lg cursor-pointer transition">
       {/* yahn */}
      <img src={fruits} alt="Fruits" className="w-10 h-10 mb-3" />
      <p className="font-medium">Fruits</p>
    </div>
    
    <div className="flex flex-col items-center justify-center border rounded-xl p-6 hover:shadow-lg cursor-pointer transition">
       {/* yahn */}
      <img src={clothes} alt="Clothes" className="w-10 h-10 mb-3" />
      <p className="font-medium">Clothes</p>
    </div>
    
    <div className="flex flex-col items-center justify-center border rounded-xl p-6 hover:shadow-lg cursor-pointer transition">
      {/* yahn */}
      <img src={stationery} alt="Stationery" className="w-10 h-10 mb-3" />
      <p className="font-medium">Stationery</p>
    </div>
    
    <div className="flex flex-col items-center justify-center border rounded-xl p-6 hover:shadow-lg cursor-pointer transition">
      <img src={food} alt="Food" className="w-10 h-10 mb-3" />
      <p className="font-medium">Food</p>
    </div>
    
  </div>
         </div>

         {/* last div slider */}
         {/* y 1st option h */}
         {false && 
          <div className="w-full py-10">
        <div className="flex justify-between items-center px-4 mb-6">
          <h2 className="text-2xl font-bold">Top Vendors</h2>
        </div>

      {/* Scroll container (you add scrolling here) */}
         <div className="flex gap-6 px-4 overflow-x-auto">
        {vendors.map((vendor, index) => (
          <VendorCard key={index} {...vendor} />
        ))}
          </div>
          </div>
         }

        {/* 2nd option */}
         <div className="w-full py-10 bg-[#f5f4f3] hidden md:block" >
          <h2 className="text-4xl mb-6 text-center text-black font-bold">Top Picks Near You</h2>
      <motion.div
        initial={{ opacity: 0, translateY: 20 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.3, delay: 0.5 }}
        className="w-full flex justify-center"
      >
        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={2.3}
          loop={true}
          spaceBetween={40}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
            slideShadows: false,
          }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
          className="w-full max-w-6xl"
        >
          {vendors.map((vendor, index) => (
            <SwiperSlide key={index} className="!h-[400px] flex items-center justify-center">
              <VendorCard {...vendor} />
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
         </div>

         <div className="w-full py-10 bg-[#f5f4f3] md:hidden">
           <h2 className="text-4xl mb-6 text-center text-black font-bold">Top Picks Near You</h2>
  <motion.div
    initial={{ opacity: 0, translateY: 20 }}
    animate={{ opacity: 1, translateY: 0 }}
    transition={{ duration: 0.3, delay: 0.5 }}
    className="w-full flex justify-center"
  >
    <Swiper
      effect="cards"
      grabCursor={true}
      loop={true}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      modules={[EffectCards, Autoplay, Pagination, Navigation]}
      className="Carousal_002 h-[400px] w-[280px]" // adjust size as needed
    >
      {vendors.map((vendor, index) => (
        <SwiperSlide key={index} className="rounded-2xl shadow-lg">
          <VendorCard {...vendor} />
        </SwiperSlide>
      ))}
    </Swiper>
  </motion.div>
         </div>


       
    </div>
  )
}

export default Center







