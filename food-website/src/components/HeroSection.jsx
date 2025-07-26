import React from 'react'

function HeroSection() {
  return (
    <>
     <div className="flex flex-col lg:flex-row items-center justify-between p-12 p-5 py-12 max-w-7xl mx-auto gap-10">
      {/* Left Side - Image and Contact Info */}
      <div className="relative  lg:w-1/2">
        <img
          src="/images/chop.png" 
          alt="Delicious Food"
          className="w-full h-auto rounded-lg object-cover"
        />
        <div className="absolute bottom-5 left-5 bg-gray-800 text-white p-6 rounded-lg shadow-lg max-w-sm">
          <h2 className="text-xl font-semibold mb-4">Come and visit us</h2>
          <div className="space-y-2 text-sm">
            <p>📞 (414) 857 - 0107</p>
            <p>📧 happytummy@restaurant.com</p>
            <p>📍 837 W. Marshall Lane Marshalltown, IA 50158, Los Angeles</p>
          </div>
        </div>
      </div>

      {/* Right Side - Text */}
      <div className="w-full lg:w-1/2">
        <h1 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
          We provide healthy food for your family.
        </h1>
        <p className="text-gray-700 mb-6">
          Our story began with a vision to create a unique dining experience that merges fine dining, exceptional service, and a vibrant ambiance. Rooted in the city’s rich culinary culture, we aim to honor our local roots while infusing a global palate.
        </p>
        <p className="text-gray-700 mb-6">
          At place, we believe that dining is not just about food, but also about the overall experience. Our staff, renowned for their warmth and dedication, strives to make every visit an unforgettable event.
        </p>
        <button className="mt-4 px-6 py-2 border border-gray-800 text-gray-800 rounded-full hover:bg-gray-800 hover:text-white transition duration-300">
          More About Us
        </button>
      </div>
    </div>
    </>
  )
}

export default HeroSection