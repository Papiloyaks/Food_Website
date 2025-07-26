import React from 'react'






const testimonials = [
  {
    quote: "The best restaurant",
    text: "Last night, we dined at place and were simply blown away. From the moment we stepped in, we were enveloped in an inviting atmosphere and greeted with warm smiles.",
    name: "Sophie Robson",
    location: "Los Angeles, CA",
    image: "/images/woman.png", 
  },
  {
    quote: "Simply delicious",
    text: "Place exceeded my expectations on all fronts. The ambiance was cozy and relaxed, making it a perfect venue for our anniversary dinner. Each dish was prepared and beautifully presented.",
    name: "Matt Cannon",
    location: "San Diego, CA",
    image: "/images/man.png",
  },
  {
    quote: "One of a kind restaurant",
    text: "The culinary experience at place is first to none. The atmosphere is vibrant, the food – nothing short of extraordinary. The food was the highlight of our evening. Highly recommended.",
    name: "Andy Smith",
    location: "San Francisco, CA",
    image: "/images/girl.png", 
  },
];

function Testimonial() {
  return (
    <>
    <section className="py-12 px-4 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10">What Our Customers Say</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((item, index) => (
          <div key={index} className="bg-[#f9f9f7] rounded-lg border-0  p-6">
            <h3 className="text-red-600 font-semibold mb-2">“{item.quote}”</h3>
            <p className="text-gray-700 text-sm mb-4">{item.text}</p>
            <div className="flex items-center gap-3 pt-4 border-t">
              <img
                src={item.image}
                alt={item.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold text-sm">{item.name}</p>
                <p className="text-xs text-gray-500">{item.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
    </>
  );
};

export default Testimonial;