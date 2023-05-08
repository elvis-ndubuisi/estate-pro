import NavBar from "../components/NavBar";
import Button from "../components/Button";
import { FaMapMarkerAlt } from "react-icons/fa";

import showcase from "../assets/houses/pexels-mike-bird-144632.jpg";

function Home() {
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

      <section className="max-w-screen-xl mx-auto flex items-center justify-between px-2">
        <h2 className="text-3xl font-bold text-gray-800">Trusted by</h2>

        <div className="flex items-center justify-between gap-6 flex-1 my-16"></div>
      </section>
    </main>
  );
}

export default Home;
