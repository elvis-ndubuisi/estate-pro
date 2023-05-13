import NavBar from "../components/NavBar";
import PropertyCard from "../components/cards/PropertyCard";
import properties from "../assets/data/properties";
import Button from "../components/Button";
import Select from "../components/inputs/Select";
import { TiLocationOutline, TiHomeOutline, TiDocument } from "react-icons/ti";
import { useNavigate } from "react-router-dom";
import SubscribeBanner from "../components/SubscribeBanner";

function Properties() {
  const navigate = useNavigate();

  return (
    <>
      <NavBar />
      <main className="max-w-screen-xl mx-auto text-stone-950 flex flex-col gap-16 px-2">
        <section className="mt-[18vh] max-w-3xl w-full mx-auto text-center">
          <h1 className="font-semibold text-5xl mb-8">Browse Our Properties</h1>
          <p className="text-gray-800">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus
            nam nobis deserunt cumque neque repudiandae perferendis, dolorum
            harum iusto. Molestiae?
          </p>
          <div className="my-8 flex items-center justify-center gap-4 flex-wrap">
            <Button
              showAs="primary"
              onClick={() => navigate("/create-property")}
            >
              Post a property
            </Button>
            <Button
              exStyles="bg-transparent border-2 border-gray-200 text-stone-950"
              onClick={() => navigate("/about-us")}
            >
              About EstatePro
            </Button>
          </div>
          <section className="bg-gray-100 rounded-md p-8 mx-2 flex items-center justify-center gap-4 flex-wrap">
            <Select
              htmlFor="location"
              options={[
                { label: "location1", value: "location1" },
                { label: "location2", value: "location2" },
              ]}
              icon={<TiLocationOutline size={24} />}
            />
            <Select
              htmlFor="property"
              options={[
                { label: "property1", value: "property1" },
                { label: "property2", value: "property2" },
              ]}
              icon={<TiHomeOutline size={24} />}
            />
            <Select
              htmlFor="type"
              options={[
                { label: "type1", value: "type1" },
                { label: "type2", value: "type2" },
              ]}
              icon={<TiDocument size={24} />}
            />
          </section>
        </section>
        <section className="flex flex-wrap justify-center gap-6">
          {properties.map((property, idx) => (
            <PropertyCard {...property} key={idx} />
          ))}
        </section>
      </main>
      <div className="px-">
        <SubscribeBanner />
      </div>
    </>
  );
}

export default Properties;
