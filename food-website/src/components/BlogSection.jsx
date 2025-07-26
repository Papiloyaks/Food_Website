import React from 'react'


const blogPosts = [
  {
    title: "The secret tips & tricks to prepare a perfect burger & pizza for our customers",
    date: "January 3, 2023",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    image: "/images/burger.png", 
    large: true,
  
  },
  {
    title: "How to prepare the perfect french fries in an air fryer",
    date: "January 3, 2023",
    image: "/images/fries.png",
  },
  {
    title: "How to prepare delicious chicken tenders",
    date: "January 3, 2023",
    image: "/images/chick.png",
  },
  {
    title: "7 delicious cheesecake recipes you can prepare",
    date: "January 3, 2023",
    image: "/images/cake.png",
  },
  {
    title: "5 great pizza restaurants you should visit this city year",
    date: "January 3, 2023",
    image: "/images/pizza.png",
  },
];




function BlogSection() {
  return (
    <> 
        <section className="py-12 px-4 max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold">Our Blog & Articles</h2>
        <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-full text-sm">
          Read All Articles
        </button>
      </div>

      <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-4 h-42">
        {blogPosts.map((post, index) => (
          <div
            key={index}
            className={`rounded-lg overflow-hidden bg-white shadow ${
              post.large ? 'md:col-span-2 md:row-span-2' : ''
            }`}
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full object-cover hover-transform hover:scale-105 transition-transform duration-300"
            />
            <div className="p-4">
              <p className="text-sm text-gray-500 mb-1">{post.date}</p>
              <h3 className="text-md font-semibold">{post.title}</h3>
              {post.description && (
                <p className="text-sm text-gray-600 mt-2">{post.description}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
    </>
  )
}

export default BlogSection