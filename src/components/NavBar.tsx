import { Link } from "react-router-dom";

import Brand from "./Brand";
import Button from "./Button";

function NavBar() {
  return (
    <header className="flex items-center justify-between gap-6 py-3 md:py-5 lg:py-7 px-2">
      <Brand />

      <nav className="flex-1 hidden md:flex items-center gap-6">
        <Link to="/" className="capitalize text-gray-700 text-lg">
          home
        </Link>

        <Link to="about-us" className="capitalize text-gray-700 text-lg">
          about
        </Link>

        <Link to="properties" className="capitalize text-gray-700 text-lg">
          properties
        </Link>

        <Link to="agents" className="capitalize text-gray-700 text-lg">
          agents
        </Link>

        <Link to="blogs" className="capitalize text-gray-700 text-lg">
          blogs
        </Link>
      </nav>

      <Button exStyles="hidden md:flex">get started</Button>
    </header>
  );
}

export default NavBar;
