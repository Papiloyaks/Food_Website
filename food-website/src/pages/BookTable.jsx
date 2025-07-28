import React from "react";

const BookTable = () => {
  return (
    <section className="bg-neutral-50 py-16 px-4">
      <div className="max-w-4xl mx-auto text-center mb-10">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800">Book A Table</h2>
        <p className="text-gray-500 mt-4">
          We consider all the drivers of change gives you the components you need
          to change to create a truly happens.
        </p>
      </div>

      <div className="bg-white shadow-xl rounded-lg max-w-4xl mx-auto p-6 relative z-10">
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Date */}
          <div>
            <label className="block text-sm text-gray-600">Date</label>
            <input
              type="date"
              className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
            />
          </div>

          {/* Time */}
          <div>
            <label className="block text-sm text-gray-600">Time</label>
            <input
              type="time"
              className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
              defaultValue="18:30"
            />
          </div>

          {/* Name */}
          <div>
            <label className="block text-sm text-gray-600">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm text-gray-600">Phone</label>
            <input
              type="tel"
              placeholder="x-xxx-xxx-xxxx"
              className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
            />
          </div>

          {/* Total Person - Full width */}
          <div className="md:col-span-2">
            <label className="block text-sm text-gray-600">Total Person</label>
            <select className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-400">
              <option>1 Person</option>
              <option>2 People</option>
              <option>3 People</option>
              <option>4+ People</option>
            </select>
          </div>

          {/* Submit Button - Full width */}
          <div className="md:col-span-2">
            <button
              type="submit"
              className="w-full bg-red-600 text-white py-3 rounded-full font-semibold hover:bg-red-700 transition"
            >
              Book A Table
            </button>
          </div>
        </form>
      </div>

        <div className="mt-[-100px] h-[650px] relative z-0">
        <iframe
          title="map"
          className="w-full h-full border-0 rounded-md"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3025.278441225923!2d-74.12608928459656!3d40.864538379313135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2f94b3ecb8b65%3A0xd248847ce3f587d1!2sClifton%2C%20NJ!5e0!3m2!1sen!2sus!4v1628292306500!5m2!1sen!2sus"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
};

export default BookTable;
