import React from 'react'

function DeliverySection() {
  return (
    <>
    <section className="px-6 py-12 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">
      {/* Left Side - Image Grid */}
      <div className="flex gap-4 w-full lg:w-1/2">
        <div className="flex-1">
          <img
            src="/images/chef.png"
            alt="Chef preparing food"
            className="rounded-lg w-full h-[550px] object-cover"
          />
        </div>
        <div className="flex flex-col gap-4 flex-1">
          <img
            src="/images/soup.png"
            alt="Soup dish"
            className="rounded-lg w-full h-[300px] object-cover hover:scale-105 transition-transform duration-300"
          />
          <img
            src="/images/plant.png"
            alt="Kebab platter"
            className="rounded-lg w-full h-[240px] object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>

      {/* Right Side - Text & Features */}
      <div className="w-full lg:w-1/2">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Fastest Food <br /> Delivery in City
        </h2>
        <p className="text-gray-600 mb-6">
          Our visual designer lets you quickly and easily drag and drop your way to custom apps for both web and desktop.
        </p>
        <ul className="space-y-4 text-gray-700 text-sm">
          <li className="flex items-center gap-3">
            <span className="text-red-500 text-xl">⏱️</span>
            Delivery within 30 minutes
          </li>
          <li className="flex items-center gap-3">
            <span className="text-red-500 text-xl">💰</span>
            Best Offer & Prices
          </li>
          <li className="flex items-center gap-3">
            <span className="text-red-500 text-xl">🛒</span>
            Online Services Available
          </li>
        </ul>
      </div>
    </section>
    </>
  )
}

export default DeliverySection