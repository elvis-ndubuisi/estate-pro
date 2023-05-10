import { Link } from "react-router-dom";
import { HiArrowRight, HiBars3, HiBars3BottomRight } from "react-icons/hi2";

import Brand from "./Brand";
import Button from "./Button";

type Props = {
  dark?: boolean;
};

function NavBar({ dark = false }: Props) {
  return (
    <header
      className={`absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-screen-xl mx-auto flex items-center justify-between gap-6 py-3 md:py-5 lg:py-7 px-2 bg-transparent`}
    >
      <Brand exStyle={`${dark ? "text-white" : "text-stone-950"}`} />

      <nav className="flex-1 hidden md:flex items-center gap-6">
        <Link
          to="/"
          className={`capitalize text-lg ${
            dark ? "text-gray-50" : "text-gray-700"
          }`}
        >
          home
        </Link>

        <Link
          to="about-us"
          className={`capitalize text-lg ${
            dark ? "text-gray-50" : "text-gray-700"
          }`}
        >
          about
        </Link>

        <Link
          to="properties"
          className={`capitalize text-lg ${
            dark ? "text-gray-50" : "text-gray-700"
          }`}
        >
          properties
        </Link>

        <Link
          to="agents"
          className={`capitalize text-lg ${
            dark ? "text-gray-50" : "text-gray-700"
          }`}
        >
          agents
        </Link>

        <Link
          to="blogs"
          className={`capitalize text-lg ${
            dark ? "text-gray-50" : "text-gray-700"
          }`}
        >
          blogs
        </Link>
      </nav>

      <Button exStyles={`hidden md:flex ${dark && "bg-white text-stone-950"}`}>
        Get Started
        <HiArrowRight />
      </Button>

      <div className="md:hidden group">
        <HiBars3 className="text-4xl" />
        <HiBars3BottomRight className="text-4xl text-[inherit] hidden" />
      </div>
    </header>
  );
}

export default NavBar;
