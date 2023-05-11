import NavBar from "../components/NavBar";
import ArticleCard from "../components/cards/ArticleCard";
import blogs from "../assets/data/blogs";
import React from "react";
import Button from "../components/Button";
import PropertyCard from "../components/cards/PropertyCard";
import properties from "../assets/data/properties";

function Blogs() {
  const blogId = React.useId();
  return (
    <>
      <NavBar />
      <main className="max-w-screen-xl mx-auto px-2 text-stone-950">
        <section className="h-[60vh] flex flex-col justify-end items-center">
          <h1 className="text-center font-bold text-5xl mb-12">
            Latest Articles
          </h1>
          <p className="text-center text-gray-700 mb-16">Home / Blog</p>
        </section>
        <section className="flex flex-wrap justify-center gap-6 mb-16">
          {blogs.map((blog, idx) => (
            <ArticleCard {...blog} key={`${idx}_${blogId}`} />
          ))}
        </section>
      </main>

      <section className="bg-gray-300 py-16">
        <section className="px-2 max-w-screen-xl mx-auto">
          <div className="flex items-center flex-wrap justify-between gap-6 mb-12">
            <h2 className="text-4xl font-semibold">Featured Properties</h2>

            <Button exStyles="font-regular bg-white text-stone-950">
              Browse all
            </Button>
          </div>

          <div className="flex flex-wrap gap-6 justify-center">
            {properties.slice(0, 3).map((property, idx) => (
              <PropertyCard {...property} key={idx} />
            ))}
          </div>
        </section>
      </section>
    </>
  );
}

export default Blogs;
