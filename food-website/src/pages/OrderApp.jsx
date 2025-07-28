import React from "react";


const logos = [
  { name: "Uber Eats", color: "text-green-600" },
  { name: "GRUBHUB", color: "text-red-600" },
  { name: "Postmates", color: "text-black" },
  { name: "DOORDASH", color: "text-orange-600" },
  { name: "foodpanda", color: "text-pink-500" },
  { name: "deliveroo", color: "text-teal-500" },
  { name: "instacart", color: "text-green-600" },
  { name: "JUST EAT", color: "text-red-600" },
  { name: "DiDi Food", color: "text-orange-500" },
];

const OrderApps = () => {
  return (
    <section className="bg-neutral-50 px-4 py-16 mt-3">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-center">
        {/* Left Text Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-800">
            You can order <br /> through apps
          </h2>
          <p className="mt-4 text-gray-500 text-lg">
            Lorem ipsum dolor sit amet consectetur adipiscing elit enim
            bibendum sed et aliquet aliquet risus tempor semper.
          </p>
        </div>

        {/* Right Logos Grid */}
        <div className="md:w-1/2 grid grid-cols-2 sm:grid-cols-3 gap-4">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="bg-white shadow rounded-md p-4 flex justify-center items-center h-20"
            >
              <span className={`font-semibold text-lg ${logo.color}`}>
                {logo.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OrderApps;