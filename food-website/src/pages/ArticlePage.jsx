import React from "react";
import ReadMoreArticles from "./ReadMoreArticles";

const sections = [
  {
    title: "What do you need to prepare a home–made burger?",
    content: `Creating the perfect burger and pizza is an art, combining ingredients, techniques, and passion to craft dishes that truly delight the palate. Today, we’ll unveil some closely guarded secrets and insider tips for mastering these beloved staples of the culinary world.`,
    points: [
      "Quality Beef: The heart of a perfect burger is top-notch beef. Opt for fresh, high-quality ground beef with a fat content of about 20% for the juiciest, most flavorful results.",
      "Seasoning: Simplicity is key here. A generous pinch of salt and black pepper just before cooking will enhance the beef’s natural flavors without overshadowing them.",
      "Don’t Overwork the Meat: When forming your patties, be gentle. Overworking the meat can lead to dense, tough burgers. You want a patty that’s firm enough to hold together, but not compressed.",
      "Cooking: High heat is crucial. Whether you’re grilling or pan-searing, make sure your cooking surface is hot enough to form a nice crust on the patty, sealing in those delicious juices.",
      "Resting: Allow your cooked burgers to rest for a few minutes before serving. This lets the juices redistribute throughout the patty, ensuring a moist and flavorful bite.",
    ],
    image: "/images/dert.png",
  },
  {
    title: "What are the right ingredients to make it delicious?",
    content: `Creating the perfect burger and pizza is an art, combining ingredients, techniques, and passion to craft dishes that truly delight the palate. Today, we’ll unveil some closely guarded secrets and insider tips for mastering these beloved staples of the culinary world.`,
    points: [
      "Quality Beef: The heart of a perfect burger is top-notch beef. Opt for fresh, high-quality ground beef with a fat content of about 20% for the juiciest, most flavorful results.",
      "Seasoning: Simplicity is key here. A generous pinch of salt and black pepper just before cooking will enhance the beef’s natural flavors without overshadowing them.",
      "Don’t Overwork the Meat: When forming your patties, be gentle. Overworking the meat can lead to dense, tough burgers.",
      "Cooking: High heat is crucial. A good sear locks in flavor.",
      "Resting: Let the patty rest before serving to lock in juices.",
    ],
    image: "/images/dart.png",
  },

];

const ArticlePage = () => {
  return (
    <div className="bg-white text-black">
      <header className="text-center px-4 py-10 max-w-3xl mx-auto mt-5">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 leading-tight">
          The secret tips & tricks to prepare a perfect burger & pizza for our
          customers
        </h1>
      </header>

      {sections.map((section, index) => (
        <div key={index} className="pb-12">
          <div className="w-full">
            <img
              src={section.image}
              alt={`Section ${index + 1}`}
              className="w-[900px] h-auto object-cover justify-center mx-auto mb-6 rounded-lg shadow-lg "
            />
          </div>
          <div className="px-4 sm:px-10 py-6 max-w-5xl mx-auto">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">
              {section.title}
            </h2>
            <p className="text-black mb-4">{section.content}</p>
            {section.points && (
              <ul className="list-decimal list-inside text-black space-y-2">
                {section.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      ))}
    <ReadMoreArticles />
    </div>
  );
};

export default ArticlePage;
