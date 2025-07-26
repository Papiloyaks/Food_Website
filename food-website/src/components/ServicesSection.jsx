import React from 'react';








const services = [
  {
    title: 'Caterings',
    image: '/images/catering.png',
    description: 'In the new era of technology we look in the future with certainty for life.',
  },
  {
    title: 'Birthdays',
    image: '/images/birth.png',
    description: 'In the new era of technology we look in the future with certainty for life.',
  },
  {
    title: 'Weddings',
    image: '/images/wedding.png',
    description: 'In the new era of technology we look in the future with certainty for life.',
  },
  {
    title: 'Events',
    image: '/images/event.png',
    description: 'In the new era of technology we look in the future with certainty for life.',
  },
];

function ServicesSection() {
  return (
   <>
   <section className="px-6 py-12 max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">
        We also offer unique <br className="hidden md:block" /> services for your events
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <div key={index} className="text-center">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-60 object-cover rounded-lg mb-4 hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105"
            />
            <h3 className="text-lg ">{service.title}</h3>
            <p className="text-gray-600 text-sm mt-2">{service.description}</p>
          </div>
        ))}
      </div>
    </section>

   </>
  );
};

export default ServicesSection;