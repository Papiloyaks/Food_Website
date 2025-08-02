import React from 'react'
import { Link } from 'react-router-dom'




const menuItems = [
  {
    title: "Breakfast",
    icon: "🍳",
    description: "In the new era of technology we look in the future with certainty and pride for our life.",
  },
  {
    title: "Main Dishes",
    icon: "🍽️",
    description: "In the new era of technology we look in the future with certainty and pride for our life.",
  },
  {
    title: "Drinks",
    icon: "🥤",
    description: "In the new era of technology we look in the future with certainty and pride for our life.",
  },
  {
    title: "Desserts",
    icon: "🍰",
    description: "In the new era of technology we look in the future with certainty and pride for our life.",
  },
];

function MenuSection() {
  return (
    <>
    <section className="py-16 px-4 bg-white text-center">
      <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-10">
        Browse Our Menu
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className="border rounded-lg p-6 shadow-sm hover:shadow-md transition bg-white"
          >
            <div className="text-4xl mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              {item.title}
            </h3>
            <p className="text-gray-600 text-sm mb-4">{item.description}</p>
            <Link to="/menu">
              <a
                href="#"
                className="text-rose-600 font-semibold hover:underline text-sm"
              >
                Explore Menu
              </a>
            </Link>
          </div>
        ))}
      </div>
    </section>
    </>
  )
}

export default MenuSection