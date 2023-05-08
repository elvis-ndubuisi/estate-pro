import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";

import Brand from "./Brand";

function Footer() {
  return (
    <footer className="bg-stone-950 text-gray-200 text-lg pt-6 md:pt-8 font-light">
      <section className="max-w-screen-xl mx-auto px-2 flex flex-col gap-7 md:flex-row">
        <section className="flex-1">
          <Brand exStyle="text-white" />
          <p className="max-w-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A
            aspernatur cupiditate perferendis neque odio excepturi maiores
          </p>
        </section>

        <nav className="flex-1 flex flex-col md:flex-row justify-between items-stretch gap-6">
          <section>
            <h3 className="mt-6 mb-6 md:mt-0 font-semibold text-xl">
              Footer Menu
            </h3>

            <div className="flex flex-col gap-2 md:gap-4">
              <Link to="/" className="hover:opacity-50 transition-opacity">
                Home
              </Link>
              <Link to="about" className="hover:opacity-50 transition-opacity">
                About
              </Link>
              <Link
                to="properties"
                className="hover:opacity-50 transition-opacity"
              >
                Properties
              </Link>
              <Link
                to="property"
                className="hover:opacity-50 transition-opacity"
              >
                Properties Single
              </Link>
              <Link to="agents" className="hover:opacity-50 transition-opacity">
                Agents
              </Link>
              <Link to="agent" className="hover:opacity-50 transition-opacity">
                Agents Single
              </Link>
            </div>
          </section>

          <section className="md:self-end">
            <div className="flex flex-col gap-2 md:gap-4">
              <Link to="blogs" className="hover:opacity-50 transition-opacity">
                Blog
              </Link>
              <Link to="blog" className="hover:opacity-50 transition-opacity">
                Blog Post
              </Link>
              <Link
                to="contact"
                className="hover:opacity-50 transition-opacity"
              >
                Contact
              </Link>
              <Link to="faqs" className="hover:opacity-50 transition-opacity">
                FAQS
              </Link>
              <Link
                to="coming-soon"
                className="hover:opacity-50 transition-opacity"
              >
                Coming Soon
              </Link>
              <Link
                to="subscribe"
                className="hover:opacity-50 transition-opacity"
              >
                Subscribe us
              </Link>
            </div>
          </section>

          <section>
            <h3 className="mt-6 mb-6 md:mt-0 font-semibold text-xl">
              Follow us
            </h3>

            <div className="flex flex-col gap-2 md:gap-4">
              <a
                href="#"
                className="flex items-center gap-2 hover:opacity-50 transition-opacity"
              >
                <span className="p-1 bg-stone-800 rounded">
                  <FaFacebookF />
                </span>
                Facebook
              </a>
              <a
                href="#"
                className="flex items-center gap-2 hover:opacity-50 transition-opacity"
              >
                <span className="p-1 bg-stone-800 rounded">
                  <FaTwitter />
                </span>
                Twitter
              </a>
              <a
                href="#"
                className="flex items-center gap-2 hover:opacity-50 transition-opacity"
              >
                <span className="p-1 bg-stone-800 rounded">
                  <FaInstagram />
                </span>
                Instagram
              </a>
              <a
                href="#"
                className="flex items-center gap-2 hover:opacity-50 transition-opacity"
              >
                <span className="p-1 bg-stone-800 rounded">
                  <FaLinkedinIn />
                </span>
                LinkedIn
              </a>
              <a
                href="#"
                className="flex items-center gap-2 hover:opacity-50 transition-opacity"
              >
                <span className="p-1 bg-stone-800 rounded">
                  <FaYoutube />
                </span>
                Youtube
              </a>
            </div>
          </section>
        </nav>
      </section>

      <aside className="border-t border-neutral-800 py-5 mt-6">
        <p className="text-center text-base">
          Copyright &copy; EstatePro | Figma design by{" "}
          <a href="/" className="text-orange-600">
            Designer Name
          </a>
          . Build with ReactJs & TailwindCSS{" "}
        </p>
      </aside>
    </footer>
  );
}

export default Footer;
