import React from "react";

const articles = [
  {
    title: "How to prepare a delicious gluten free sushi",
    date: "January 3, 2025",
    image: "/images/making.png",
  },
  {
    title: "Exclusive baking lessons from the pastry king",
    date: "January 3, 2025",
    image: "/images/baking.png",
  },
  {
    title: "How to prepare the perfect fries in an air fryer",
    date: "January 3, 2025",
    image: "/images/frry.png",
  },
  {
    title: "How to prepare delicious chicken tenders",
    date: "January 3, 2025",
    image: "/images/chicken.png",
  },
];

const ReadMoreArticles = () => {
  return (
    <section className="py-10 px-4 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold mb-2">Read More Articles</h2>
        <p className="text-gray-600 max-w-xl mx-auto text-sm">
          We consider all the drivers of change gives you the components you need
          to change to create a truly happens.
        </p>
      </div>

      {/* Article Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {articles.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-40 object-cover transition-transform duration-200 transform hover:scale-105"
            />
            <div className="p-4">
              <p className="text-xs text-gray-500 mb-1">{item.date}</p>
              <h3 className="text-sm font-semibold text-gray-800">
                {item.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ReadMoreArticles;
