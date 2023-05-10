import React from "react";
import NavBar from "../components/NavBar";
import Button from "../components/Button";
import AgentCard from "../components/cards/AgentCard";
import agents from "../assets/data/agents";

import showcase from "../assets/houses/breno-assis-r3WAWU5Fi5Q-unsplash.jpg";

function AboutUs() {
  const agentId = React.useId();
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

        <section className="max-w-screen-xl mx-auto my-12 relative h-[47vh] md:h-[58vh] lg:h-[73vh]">
          <img
            src={showcase}
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

      <section>
        <h2>Meet our team members</h2>
        <section>
          {agents.map((agent, idx) => (
            <AgentCard {...agent} key={`${idx}+${agentId}`} />
          ))}
        </section>
      </section>
    </>
  );
}

export default AboutUs;
