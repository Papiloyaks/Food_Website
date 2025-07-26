import React from 'react'
import { CgPlayButton } from "react-icons/cg";
import Testimonial from '../components/Testimonial';

function AboutUs() {
  return (
    <>
     <div className="flex flex-col lg:flex-row items-center justify-between p-12 p-5 py-12 max-w-7xl mx-auto gap-10">
      {/* Left Side - Image and Contact Info */}
      <div className="relative  lg:w-1/2">
        <img
          src="/images/bean.png" 
          alt="Delicious Food"
          className="mt-20 w-full h-auto rounded-lg object-cover"
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
      </div>
    </div>
      
       <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[500px] lg:h-[600px] w-full">
        <img
          src="/images/back.png" 
          alt="Restaurant"
          className="absolute inset-0 w-full h-full object-cover opacity-85"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
          <button className="w-16 h-16 rounded-full bg-white bg-opacity-100 text-red-700 text-5xl flex items-center justify-center mb-6 shadow-lg">
            <CgPlayButton />
          </button>
          <h1 className="text-2xl md:text-4xl font-bold">
            Feel the authentic & original taste from us
          </h1>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 px-4 md:px-16 grid grid-cols-1 md:grid-cols-3 gap-8 border-b">
        {[
          {
            title: "Multi Cuisine",
            icon: "🍽️",
            text: "In the new era of technology we look in the future with certainty life.",
          },
          {
            title: "Easy To Order",
            icon: "📱",
            text: "In the new era of technology we look in the future with certainty life.",
          },
          {
            title: "Fast Delivery",
            icon: "⏱️",
            text: "In the new era of technology we look in the future with certainty life.",
          },
        ].map((item, i) => (
          <div key={i} className="text-center">
            <div className="text-4xl mb-4">{item.icon}</div>
            <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
            <p className="text-gray-600 text-sm">{item.text}</p>
          </div>
        ))}
      </section>

      {/* Info Section */}
      <section className="py-16 px-4 md:px-16 grid md:grid-cols-2 gap-12 items-center">
        {/* Left */}
        <div>
          <h2 className="text-3xl font-semibold mb-4">
            A little information for our valuable guest
          </h2>
          <p className="text-gray-600 mb-8">
            At place, we believe that dining is not just about food, but also about
            the overall experience. Our staff, renowned for their warmth and
            dedication, strive to make every visit an unforgettable event.
          </p>
          <div className="grid grid-cols-2 gap-6 text-center">
            <div className="bg-gray-100 py-6 rounded shadow">
              <h3 className="text-2xl font-bold">3</h3>
              <p className="text-sm text-gray-600">Locations</p>
            </div>
            <div className="bg-gray-100 py-6 rounded shadow">
              <h3 className="text-2xl font-bold">1995</h3>
              <p className="text-sm text-gray-600">Founded</p>
            </div>
            <div className="bg-gray-100 py-6 rounded shadow">
              <h3 className="text-2xl font-bold">65+</h3>
              <p className="text-sm text-gray-600">Staff Members</p>
            </div>
            <div className="bg-gray-100 py-6 rounded shadow">
              <h3 className="text-2xl font-bold">100%</h3>
              <p className="text-sm text-gray-600">Satisfied Customers</p>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div>
          <img
            src="/images/mask.png" // replace with your actual image
            alt="Preparing Salad"
            className="rounded-lg shadow-lg w-full h-full object-cover"
          />
        </div>
      </section>
    </div>
    <Testimonial/>
    </>
  )
};

export default AboutUs;