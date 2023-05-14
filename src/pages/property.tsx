import properties from "../assets/data/properties";
import Button from "../components/Button";
import NavBar from "../components/NavBar";
import PropertyCard from "../components/cards/PropertyCard";
import { useParams } from "react-router-dom";
import { TbBed, TbBath, TbResize } from "react-icons/tb";
import Input from "../components/inputs/Input";

import dummy from "../assets/houses/breno-assis-r3WAWU5Fi5Q-unsplash.jpg";

function Property() {
  const params = useParams();
  const property = properties.find((p) => p.slug === params?.propertyId);

  return (
    <>
      <NavBar />
      <main className="px-2 max-w-screen-xl mx-auto mb-12">
        <section className="h-[60vh] flex flex-col justify-end items-center">
          <h1 className="font-semibold text-4xl md:text-5xl text-center mb-8 capitalize max-w-4xl">
            Property Details
          </h1>
          <p className="text-gray-700">Home/Properties/Details</p>
          <div className="my-6 flex flex-wrap items-center justify-center gap-4">
            <Button showAs="primary">Request Info</Button>
            <Button exStyles="bg-white border-2 border-gray-300 text-stone-950">
              Show More
            </Button>
          </div>
        </section>

        <section>
          <div className="relative">
            <img
              src={property?.image}
              className="w-full max-h-[74vh] aspect-video rounded-md object-cover"
            />
            <span className="block absolute top-2 left-2 bg-white px-3 py-2 text-sm rounded-lg font-medium">
              $ {property?.price}
            </span>
          </div>
        </section>

        <section>
          <section className="flex items-start justify-between py-8 border-b-2 border-gray-300 mb-8">
            <div className="flex-1">
              <small className="text-base capitalize">lorem something</small>
              <h2 className="font-semibold text-4xl mt-4">
                Home in {property?.location}
              </h2>
            </div>
            <aside className="hidden lg:flex flex-col gap-2">
              <span className="inline-flex gap-4 items-center font-medium text-gray-800">
                <TbResize size={24} /> {property?.sqft} sqft
              </span>
              <span className="inline-flex gap-4 items-center font-medium text-gray-800">
                <TbBed size={24} /> {property?.bedrooms} Bedrooms
              </span>
              <span className="inline-flex gap-4 items-center font-medium text-gray-800">
                <TbBath size={24} /> {property?.bathrooms} Bathrooms
              </span>
            </aside>
          </section>

          <section className="flex items-start justify-between gap-8">
            <div className="flex-1">
              <p className="text-gray-700">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta,
                laborum accusamus excepturi sunt, voluptate facere minus,
                molestias neque esse reprehenderit at veniam qui ea rem
                dignissimos fugiat tempore quos. Debitis?
              </p>

              <h3 className="font-semibold my-6 text-2xl">
                About the property
              </h3>

              <p className="text-gray-700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Inventore eius, expedita maiores magnam architecto eveniet iure
                laboriosam voluptatum totam obcaecati.
              </p>

              <ul className="my-4 text-gray-700">
                <li>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Illum, architecto! Aliquid quisquam paria
                </li>
              </ul>

              <p className="text-gray-700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                possimus sed dolorem unde consequuntur beatae laboriosam iusto
                animi, qui laudantium, eos exercitationem adipisci laborum totam
                aperiam, ratione tempora! Assumenda, nisi! Lorem ipsum dolor
                sit.
              </p>

              <h3 className="font-semibold my-6 text-2xl">
                Property amenities
              </h3>

              <section className="grid grid-cols-2 text-gray-700 gap-4 max-w-sm">
                <label
                  htmlFor="a1"
                  className="capitalize flex items-center gap-2"
                >
                  <input
                    type="checkbox"
                    id="a1"
                    className="accent-gray-200"
                    checked
                    defaultChecked
                  />
                  central heating
                </label>

                <label
                  htmlFor="a1"
                  className="capitalize flex items-center gap-2"
                >
                  <input
                    type="checkbox"
                    id="a1"
                    className="accent-gray-200"
                    checked
                    defaultChecked
                  />
                  pool
                </label>

                <label
                  htmlFor="a1"
                  className="capitalize flex items-center gap-2"
                >
                  <input
                    type="checkbox"
                    id="a1"
                    className="accent-gray-200"
                    checked
                    defaultChecked
                  />
                  central cooling
                </label>

                <label
                  htmlFor="a1"
                  className="capitalize flex items-center gap-2"
                >
                  <input
                    type="checkbox"
                    id="a1"
                    className="accent-gray-200"
                    checked
                    defaultChecked
                  />
                  wifi
                </label>

                <label
                  htmlFor="a1"
                  className="capitalize flex items-center gap-2"
                >
                  <input
                    type="checkbox"
                    id="a1"
                    className="accent-gray-200"
                    checked
                    defaultChecked
                  />
                  garden
                </label>

                <label
                  htmlFor="a1"
                  className="capitalize flex items-center gap-2"
                >
                  <input
                    type="checkbox"
                    id="a1"
                    className="accent-gray-200"
                    checked
                    defaultChecked
                  />
                  modern kitchen
                </label>

                <label
                  htmlFor="a1"
                  className="capitalize flex items-center gap-2"
                >
                  <input
                    type="checkbox"
                    id="a1"
                    className="accent-gray-200"
                    checked
                    defaultChecked
                  />
                  laundry
                </label>

                <label
                  htmlFor="a1"
                  className="capitalize flex items-center gap-2"
                >
                  <input
                    type="checkbox"
                    id="a1"
                    className="accent-gray-200"
                    checked
                    defaultChecked
                  />
                  home theatre
                </label>

                <label
                  htmlFor="a1"
                  className="capitalize flex items-center gap-2"
                >
                  <input
                    type="checkbox"
                    id="a1"
                    className="accent-gray-200"
                    checked
                    defaultChecked
                  />
                  security cameras
                </label>

                <label
                  htmlFor="a1"
                  className="capitalize flex items-center gap-2"
                >
                  <input
                    type="checkbox"
                    id="a1"
                    className="accent-gray-200"
                    checked
                    defaultChecked
                  />
                  garage
                </label>

                <label
                  htmlFor="a1"
                  className="capitalize flex items-center gap-2"
                >
                  <input
                    type="checkbox"
                    id="a1"
                    className="accent-gray-200"
                    checked
                    defaultChecked
                  />
                  24/7 electricity
                </label>
              </section>
            </div>
            <aside className="border-2 border-gray-300 rounded-lg p-4 max-w-xs hidden md:flex flex-col gap-2">
              <span className="font-medium text-sm text-gray-700 capitalize">
                Property rate
              </span>
              <h4 className="font-semibold text-3xl">${property?.price}</h4>
              <hr className="my-2" />
              <p className="font-semibold text-">
                Get in touch to get more info
              </p>
              <p></p>
              <Input placeholder="Your name" />
              <Input placeholder="Email address" />
              <Input placeholder="Message" />
              <Button showAs="primary">Request Info</Button>
            </aside>
          </section>
        </section>

        {/* <hr className="my-12" />

        <section className="px-2 max-w-screen-xl mx-auto">
          <h2 className="text-4xl font-semibold mb-12">Property Gallery</h2>

          <div className="grid grid-cols-3 grid-rows-4 gap-3">
            <img src={dummy} className="rounded-lg object-cover" />
            <img src={dummy} className="rounded-lg object-cover" />
            <img src={dummy} className="rounded-lg object-cover" />
            <img src={dummy} className="rounded-lg object-cover" />
            <img src={dummy} className="rounded-lg object-cover" />
            <img src={dummy} className="rounded-lg object-cover" />
          </div>
        </section> */}
      </main>
      <section className="bg-[#f4f4f4] py-16">
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

export default Property;
