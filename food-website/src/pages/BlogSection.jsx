import React from "react";
import ArticlePage from "./ArticlePage";

const blogPosts = [
  {
    title: "How to prepare a delicious gluten free sushi",
    date: "January 3, 2023",
    image: "https://source.unsplash.com/300x200/?sushi",
  },
  {
    title: "Exclusive baking lessons from the pastry king",
    date: "January 3, 2023",
    image: "https://source.unsplash.com/300x200/?baking",
  },
  {
    title: "How to prepare the perfect fries in an air fryer",
    date: "January 3, 2023",
    image: "https://source.unsplash.com/300x200/?fries",
  },
  {
    title: "How to prepare delicious chicken tenders",
    date: "January 3, 2023",
    image: "https://source.unsplash.com/300x200/?chicken",
  },
  {
    title: "5 great cooking gadgets you can buy to save time",
    date: "January 3, 2023",
    image: "https://source.unsplash.com/300x200/?gadgets",
  },
  {
    title: "The secret tips & tricks to prepare a perfect burger",
    date: "January 3, 2023",
    image: "https://source.unsplash.com/300x200/?burger",
  },
  {
    title: "7 delicious cheesecake recipes you can prepare",
    date: "January 3, 2023",
    image: "https://source.unsplash.com/300x200/?cheesecake",
  },
  {
    title: "5 great pizza restaurants you should visit this city",
    date: "January 3, 2023",
    image: "https://source.unsplash.com/300x200/?pizza",
  },
  {
    title: "How to prepare a delicious gluten free sushi",
    date: "January 3, 2023",
    image: "https://source.unsplash.com/300x200/?wrap",
  },
  {
    title: "Top 20 simple and quick desserts for kids",
    date: "January 3, 2023",
    image: "https://source.unsplash.com/300x200/?dessert",
  },
  {
    title: "5 great cooking gadgets you can buy to save time",
    date: "January 3, 2023",
    image: "https://source.unsplash.com/300x200/?kitchen",
  },
  {
    title: "Top 20 simple and quick desserts for kids",
    date: "January 3, 2023",
    image: "https://source.unsplash.com/300x200/?pastries",
  },
];

const BlogSection = () => {
  return (
    <section className="px-4 py-10 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-2">Our Blog & Articles</h2>
        <p className="text-gray-600 text-sm max-w-xl mx-auto">
          We consider all the drivers of change gives you the components you
          need to change to create a truly happens.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {blogPosts.map((post, index) => (
          <div
            key={index}
            className="bg-white shadow-sm hover:shadow-lg transition-shadow rounded-lg overflow-hidden border border-gray-200"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-44 object-cover"
            />
            <div className="p-4">
              <p className="text-xs text-gray-500">{post.date}</p>
              <h3 className="text-md font-semibold text-gray-800 mt-1">
                {post.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
      <ArticlePage />
    </section>

  );
};

export default BlogSection;
