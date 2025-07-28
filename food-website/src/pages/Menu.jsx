import React from "react";
import OrderApps from "./OrderApp";

const menuItems = [
  {
    title: "Fried Eggs",
    price: "$9.99",
    image: "/images/boil.png",
    desc: "Made with eggs, lettuce, salt, oil and other ingredients.",
  },
  {
    title: "Hawaiian Pizza",
    price: "$15.99",
    image: "/images/pizza.png",
    desc: "Made with eggs, lettuce, salt, oil and other ingredients.",
  },
  {
    title: "Martinez Cocktail",
    price: "$7.25",
    image: "/images/wine.png",
    desc: "Made with eggs, lettuce, salt, oil and other ingredients.",
  },
  {
    title: "Butterscotch Cake",
    price: "$20.99",
    image: "/images/butter.png",
    desc: "Made with eggs, lettuce, salt, oil and other ingredients.",
  },
  {
    title: "Mint Lemonade",
    price: "$5.89",
    image: "/images/green.png",
    desc: "Made with eggs, lettuce, salt, oil and other ingredients.",
  },
  {
    title: "Chocolate Icecream",
    price: "$18.05",
    image: "/images/chocolate.png",
    desc: "Made with eggs, lettuce, salt, oil and other ingredients.",
  },
  {
    title: "Cheese Burger",
    price: "$12.55",
    image: "/images/cheese.png",
    desc: "Made with eggs, lettuce, salt, oil and other ingredients.",
  },
  {
    title: "Classic Waffles",
    price: "$12.99",
    image: "/images/waffles.png",
    desc: "Made with eggs, lettuce, salt, oil and other ingredients.",
  },
];

const categories = ["All", "Breakfast", "Main Dishes", "Drinks", "Desserts"];

const Menu = () => {
  return (
    <section className="p-6 md:p-10 max-w-7xl mx-auto">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-4xl md:text-5xl font-semibold text-gray-800">Our Menu</h2>
        <p className="text-gray-500 mt-2">
          We consider all the drivers of change gives you the components you need to create to create a truly
          happens.
        </p>
      </div>

      {/* Category Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {categories.map((cat, index) => (
          <button
            key={index}
            className={`px-5 py-2 rounded-full border ${
              cat === "All" ? "bg-red-600 text-white" : "bg-white text-gray-700"
            } hover:bg-red-600 hover:text-white transition`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Menu Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-45 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-red-600">{item.price}</h3>
              <h4 className="text-md font-bold mt-1">{item.title}</h4>
              <p className="text-sm text-gray-500 mt-1">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
<OrderApps/>
    </section>
  );
};

export default Menu;
