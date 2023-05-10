import React from "react";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import { TiCalendarOutline, TiStopwatch } from "react-icons/ti";
import { HiArrowRight } from "react-icons/hi2";
import NavBar from "../components/NavBar";
import Button from "../components/Button";
import { FaMapMarkerAlt } from "react-icons/fa";
import showcase from "../assets/houses/pexels-mike-bird-144632.jpg";
import google from "../assets/companies/google.svg";
import webflow from "../assets/companies/webflow.svg";
import youtube from "../assets/companies/youtube.svg";
import properties from "../assets/data/properties";
import PropertyCard from "../components/cards/PropertyCard";
import blogs from "../assets/data/blogs";
import ArticleCard from "../components/cards/ArticleCard";
import SubscribeBanner from "../components/SubscribeBanner";

import ts from "../assets/houses/sean-pollock-PhYq704ffdA-unsplash.jpg";

function Home() {
  const propertyId = React.useId();
  const articleId = React.useId();
  return (
    <main>
      <NavBar dark={true} />
      <section className="px-2 bg-stone-950 text-white min-h-screen pt-16">
        <div className="mt-12 flex flex-col gap-6 items-start lg:flex-row lg:items-center lg:justify-around lg:pt-16">
          <h1 className="font-semibold text-5xl leading-[1.2] md:max-w-xl lg:max-w-lg lg:flex-1">
            The Best Place To Find Your{" "}
            <mark className="bg-transparent text-red-500">Dream House</mark>
          </h1>

          <div className="flex flex-col gap-6 items-start lg:max-w-lg lg:flex-1">
            <p>
              We Are Real Estate Agent That Will Help You In Designing A Modern
              And Minimalistic Dream House, Let's Discuss
            </p>

            <Button showAs="primary">Get In touch</Button>

            <footer className="flex flex-col gap-6 md:flex-row md:gap-10">
              <div>
                <h2 className="font-semibold text-3xl mb-1">
                  1200<span className="text-red-500 font-medium">+</span>
                </h2>
                <h3 className="font-medium text-sm">Premium Products</h3>
              </div>

              <div>
                <h2 className="font-semibold text-3xl mb-1">
                  4500<span className="text-red-500 font-medium">+</span>
                </h2>
                <h3 className="font-medium text-sm">Happy Customers</h3>
              </div>

              <div>
                <h2 className="font-semibold text-3xl mb-1">
                  240<span className="text-red-500 font-medium">+</span>
                </h2>
                <h3 className="font-medium text-sm">Award Wining</h3>
              </div>
            </footer>
          </div>
        </div>

        <section className="py-16 max-w-screen-xl mx-auto">
          <img
            src={showcase}
            alt="beautiful home"
            className="h-[65vh] aspect-square md:aspect-auto w-full object-cover rounded-lg"
          />
          <section className="mt-3 bg-white rounded-md p-4 max-w-md mx-auto flex items-center md:mt-0 md:relative md:-translate-y-1/2 lg:-left-1/2 lg:translate-x-[55%]">
            <FaMapMarkerAlt className="text-red-500 text-2xl" />
            input
          </section>
        </section>
      </section>

      <section className="max-w-screen-xl mx-auto flex flex-col lg:flex-row gap-10 items-center px-2 my-16">
        <h2 className="text-3xl font-bold text-gray-800">Trusted by</h2>

        <div className="flex flex-col justify-end gap-10 flex-1 md:flex-row">
          <img
            src={youtube}
            alt="company logo"
            className="max-h-8 grayscale opacity-60 hover:filter-none hover:opacity-100 transition-all duration-100 ease-in-out object-contain cursor-pointer"
          />
          <img
            src={google}
            alt="company logo"
            className="max-h-8 grayscale opacity-60 hover:filter-none hover:opacity-100 transition-all duration-100 ease-in-out object-contain cursor-pointer"
          />
          <img
            src={webflow}
            alt="company logo"
            className="max-h-8 grayscale opacity-60 hover:filter-none hover:opacity-100 transition-all duration-100 ease-in-out object-contain cursor-pointer"
          />
        </div>
      </section>

      <hr className="max-w-screen-xl mx-auto" />

      <section className="max-w-screen-xl mx-auto my-6 text-gray-900 px-2">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-4xl font-bold">Popular Resident</h2>

          <Link
            to="/"
            className="hidden text-base capitalize text-gray-700 md:flex items-center gap-4 hover:gap-2 transition-all ease-linear"
          >
            explore all
            <BsArrowRight size={24} />
          </Link>
        </div>

        {/* TODO: Add spacing btw cards for LG screen */}
        <div className="flex flex-wrap justify-center gap-6">
          {properties.map((property, idx) => (
            <PropertyCard key={`${idx}-${propertyId}`} {...property} />
          ))}
        </div>
      </section>

      {/* TODO: Change bg-image */}
      <section className="text-gray-900 py-20 bg-gray-300">
        <section className="px-2 max-w-screen-xl mx-auto">
          <h2 className="font-bold text-3xl">
            What our <span className="block md:inline">clients say</span>
          </h2>

          <section className="relative mt-6">
            <img
              src={ts}
              alt="client's house"
              className="min-h-[25em] max-h-[27em] w-full lg:max-w-[60%] object-cover object-center rounded-md aspect-auto md:aspect-video"
            />

            <div className="h-[15.8em] md:h-[10em] lg:h-auto lg:mb-12">
              <div className="bg-white text-stone-950 p-6 w-11/12 max-w-md rounded-md flex flex-col gap-4 text-left relative mx-auto -top-40 lg:absolute lg:bottom-auto lg:top-1/2 lg:left-1/2 lg:translate-x-0 lg:-translate-y-1/2">
                <h3 className="font-semibold text-xl">
                  "They did an amazing job for my house."
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
                  reiciendis accusantium quas fugit tempora aliquam temporibus
                  asperiores.
                </p>
                <hr />
                <div className="flex items-center gap-3 text-gray-600">
                  <img
                    src=""
                    alt="clients profile"
                    className="w-14 bg-gray-600 aspect-square rounded-full object-cover object-center"
                  />
                  <hr />
                  <h4 className="font-semibold text-stone-950">
                    Tony WondaMellon
                  </h4>
                </div>
              </div>
            </div>
          </section>
        </section>

        <Button exStyles="mx-auto" showAs="primary">
          Get in touch
          <HiArrowRight size={18} />
        </Button>
      </section>

      <section className="px-3 max-w-screen-xl mx-auto my-16 lg:flex lg:items-center lg:gap-2 lg:justify-between">
        <section>images</section>
        <section>
          <h3 className="font-semibold text-3xl my-8">
            Let Us Help You Find Your Dream Home
          </h3>
          <p className="text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            optio sint nostrum tempora consectetur, veniam deleniti omnis
            pariatur iure vel.
          </p>

          <footer className="text-left flex flex-col items-start gap-6 md:flex-row md:text-center md:gap-10 mt-12">
            <div>
              <h2 className="font-semibold text-3xl mb-1">127</h2>
              <h3 className="font-medium text-sm">Properties Built</h3>
            </div>

            <div>
              <h2 className="font-semibold text-3xl mb-1">
                300<span className="font-medium">+</span>
              </h2>
              <h3 className="font-medium text-sm">Happy Customers</h3>
            </div>

            <div>
              <h2 className="font-semibold text-3xl mb-1">10</h2>
              <h3 className="font-medium text-sm">Year Of Experience</h3>
            </div>
          </footer>
        </section>
      </section>

      <section className="bg-gray-100 py-16">
        <section className="px-2 max-w-screen-xl mx-auto ">
          <h2 className="font-bold text-3xl">
            Articles & <span className="block md:inline">Resources</span>
          </h2>

          <section className="relative my-8">
            <img
              src={ts}
              alt="client's house"
              className="min-h-[25em] max-h-[27em] w-full lg:max-w-[60%] object-cover object-center rounded-md aspect-auto md:aspect-video"
            />

            <div className="h-[12.8em] md:h-[10em] lg:h-auto">
              <div className="bg-white text-stone-950 p-6 w-11/12 max-w-md rounded-md flex flex-col gap-4 text-left relative mx-auto -top-40 lg:absolute lg:bottom-auto lg:top-1/2 lg:left-1/2 lg:translate-x-0 lg:-translate-y-1/2">
                <h3 className="font-semibold text-xl">
                  Why a luxury home in a gated community is a better investment
                  option
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
                  reiciendis accusantium quas fugit tempora aliquam temporibus
                  asperiores.
                </p>
                <hr />
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-3 text-gray-600">
                    <TiCalendarOutline size={28} />
                    May 5, 2023
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <TiStopwatch size={28} />
                    10 min read
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>

        <section className="px-2 max-w-screen-xl mx-auto flex flex-row flex-wrap gap-6 items-stretch justify-center">
          {blogs.map((blog, idx) => (
            <ArticleCard key={`${idx}-${articleId}`} {...blog} />
          ))}
        </section>
      </section>

      <div className="px-2">
        <SubscribeBanner />
      </div>
    </main>
  );
}

export default Home;
