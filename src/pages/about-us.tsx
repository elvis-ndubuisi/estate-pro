import React from "react";
import NavBar from "../components/NavBar";
import Button from "../components/Button";
import agents from "../assets/data/agents";
import ArticleCard from "../components/cards/ArticleCard";
import blogs from "../assets/data/blogs";
import MemberCard from "../components/cards/MemberCard";
import SubscribeBanner from "../components/SubscribeBanner";

import showcase from "../assets/houses/breno-assis-r3WAWU5Fi5Q-unsplash.jpg";

function AboutUs() {
  const memberId = React.useId();
  const articleId = React.useId();

  return (
    <>
      <NavBar />
      <section className="px-2 text-stone-950 min-h-screen pt-16">
        <div className="mt-12 flex flex-col gap-6 items-start lg:flex-row lg:items-center lg:justify-around lg:pt-16">
          <h1 className="font-semibold text-5xl leading-[1.2] md:max-w-xl lg:max-w-lg lg:flex-1">
            About Our Real Estate Firm
          </h1>

          <div className="flex flex-col gap-6 items-start lg:max-w-lg lg:flex-1">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
              sapiente eos odio omnis consequatur.
            </p>
            <div className="flex items-center gap-4">
              <Button showAs="primary">Join our team</Button>
              <Button showAs="outline" exStyles="border-gray-200 font-medium">
                Know more
              </Button>
            </div>
          </div>
        </div>

        <section className="max-w-screen-xl mx-auto mt-12 mb-8 relative h-[47vh] md:h-[58vh] lg:h-[73vh]">
          <img
            src="https://source.unsplash.com/random/300x300/"
            alt="beautiful home"
            className="h-[60%] md:h-[70%] aspect-video w-full max-w-[70%] object-cover rounded-lg absolute top-0 left-0"
          />

          <img
            src={showcase}
            alt="beautiful home"
            className="h-[60%] md:h-[70%] aspect-video w-full max-w-[70%] object-cover rounded-lg absolute bottom-0 right-0"
          />
        </section>
      </section>

      <section className="max-w-screen-xl mx-auto py-6">
        <h2 className="text-center font-semibold text-3xl">
          Take a look at our numbers
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 my-6">
          <div className="flex flex-col items-center justify-center gap-2 text-center max-w-xs">
            <h3 className="font-medium text-red-500 text-4xl mb-2">99%</h3>
            <h4 className="font-bold text-lg">Customer Satisfaction</h4>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center gap-2 text-center max-w-xs">
            <h3 className="font-medium text-red-500 text-4xl mb-2">49k</h3>
            <h4 className="font-bold text-lg">Successful Sales</h4>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center gap-2 text-center max-w-xs">
            <h3 className="font-medium text-red-500 text-4xl mb-2">12M</h3>
            <h4 className="font-bold text-lg">Real Estate Partners</h4>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro.
            </p>
          </div>
        </div>
      </section>

      <section className="px-2 py-16 bg-gray-100 my-16">
        <h2 className="text-center font-semibold text-4xl">
          Meet our team members
        </h2>
        <section className="flex flex-wrap justify-center gap-8 mt-12">
          {agents.map((agent, idx) => (
            <MemberCard {...agent} key={`${idx}+${memberId}`} />
          ))}
        </section>
      </section>

      <section className="px-2 max-w-screen-xl mx-auto ">
        <h2 className="font-semibold text-4xl mb-12">
          Articles & <span className="block md:inline">Resources</span>
        </h2>

        <section className="flex flex-row flex-wrap gap-6 items-stretch justify-center">
          {blogs.map((blog, idx) => (
            <ArticleCard key={`${idx}-${articleId}`} {...blog} />
          ))}
        </section>
      </section>

      <section className="px-2">
        <SubscribeBanner />
      </section>
    </>
  );
}

export default AboutUs;
