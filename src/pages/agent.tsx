import { BiMailSend, BiPhone } from "react-icons/bi";
import NavBar from "../components/NavBar";
import Button from "../components/Button";
import properties from "../assets/data/properties";
import PropertyCard from "../components/cards/PropertyCard";
import agents from "../assets/data/agents";
import { useParams } from "react-router-dom";

function Agent() {
  const params = useParams();
  const agent = agents.find((agent) => agent.slug === params.agentId);
  return (
    <>
      <NavBar />
      <main className="max-w-screen-xl mx-auto px-2 mb-12">
        <section className="min-h-[45vh] flex flex-col justify-end items-center">
          <h1 className="font-semibold text-4xl md:text-5xl text-center mb-6 lg:mb-12 capitalize max-w-4xl">
            {agent?.name}
          </h1>
          <h2 className="mb-6 lg:mb-12 capitalize">
            Home/Agents/{agent?.name}
          </h2>
        </section>

        <section className="flex flex-col gap-8 lg:flex-row items-center">
          <img
            src={agent?.image}
            className="min-h-[40vh] max-h-[65vh] aspect-[9/16] w-full max-w-sm rounded-lg mx-auto"
          />

          <div className="lg:flex-1 text-center lg:text-left">
            <h3 className="text-gray-800 text-xl mb-4">Agent</h3>

            <h1 className="font-semibold text-4xl md:text-5xl mb-8 capitalize max-w-2xl mx-auto lg:mx-0">
              {agent?.name}
            </h1>

            <p className="text-gray-800 max-w-2xl mx-auto mb-8 lg:text-lg lg:mx-0">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo,
              mollitia consequuntur iusto, incidunt repellendus soluta quisquam,
              obcaecati necessitatibus dolorem modi nobis aliquid. Repellat,
              maiores expedita.
            </p>

            <div className="max-w-sm mx-auto flex flex-col items-center lg:mx-0 lg:items-start">
              <div className="flex items-center gap-3 mb-4">
                <BiPhone size={24} className="text-red-500" />
                <a href="tel:+">{agent?.phone}</a>
              </div>

              <div className="flex items-center gap-3">
                <BiMailSend size={24} className="text-red-500" />
                <a href="mailto:">{agent?.mail}</a>
              </div>
            </div>
          </div>
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

export default Agent;
