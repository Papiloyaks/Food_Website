import React from "react";

const ContactForm = () => {
  return (
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-gray-900">Contact Us</h2>
        <p className="mt-2 text-gray-600 max-w-xl mx-auto">
          We consider all the drivers of change gives you the components you need to change to create a truly happens.
        </p>
      </div>

      <div className="max-w-2xl mx-auto bg-white p-6 sm:p-10 shadow-xl rounded-lg">
        <form className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="mt-1 w-full rounded-full border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                placeholder="Enter email address"
                className="mt-1 w-full rounded-full border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Subject</label>
            <input
              type="text"
              placeholder="Write a subject"
              className="mt-1 w-full rounded-full border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              placeholder="Write your message"
              rows="4"
              className="mt-1 w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          <div>
            <button
              type="submit"
              className="w-full bg-red-700 text-white py-2 rounded-full hover:bg-red-800 transition"
            >
              Send
            </button>
          </div>
        </form>
      </div>

      {/* Bottom Contact Info */}
      <div className="mt-16 grid gap-8 md:grid-cols-3 text-center md:text-left text-sm text-gray-700 px-4">
        <div>
          <h4 className="font-semibold">Call Us:</h4>
          <p className="text-red-600 font-semibold mt-1">+1-234–567–8900</p>
        </div>
        <div>
          <h4 className="font-semibold">Hours:</h4>
          <p className="mt-1">Mon–Fri: 11am – 8pm</p>
          <p>Sat, Sun: 9am – 10pm</p>
        </div>
        <div>
          <h4 className="font-semibold">Our Location:</h4>
          <p className="mt-1">123 Bridge Street</p>
          <p>Nowhere Land, LA 12345</p>
          <p>United States</p>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
