import NavBar from "../components/NavBar";
import AgentCard from "../components/cards/AgentCard";
import agents from "../assets/data/agents";
import React from "react";
import SubscribeBanner from "../components/SubscribeBanner";

function Agents() {
  const agentId = React.useId();
  return (
    <>
      <NavBar />
      <main className="max-w-screen-xl mx-auto px-2 text-stone-950">
        <section className="h-[60vh] flex flex-col justify-end items-center">
          <h1 className="text-center font-bold text-5xl mb-12">Our Agents</h1>
          <p className="text-center text-gray-700 mb-16 max-w-3xl">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus
            quisquam ab perspiciatis cumque doloribus dignissimos.
          </p>
        </section>
        <section className="flex flex-wrap justify-center gap-6 mb-16">
          {agents.map((blog, idx) => (
            <AgentCard {...blog} role="agent" key={`${idx}_${agentId}`} />
          ))}
        </section>
      </main>

      <section className="px-2">
        <SubscribeBanner />
      </section>
    </>
  );
}

export default Agents;
