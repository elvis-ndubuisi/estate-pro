import { Link } from "react-router-dom";
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
              <Link to="/">Home</Link>
              <Link to="about">About</Link>
              <Link to="properties">Properties</Link>
              <Link to="property">Properties Single</Link>
              <Link to="agents">Agents</Link>
              <Link to="agent">Agents Single</Link>
            </div>
          </section>

          <section className="md:self-end">
            <div className="flex flex-col gap-2 md:gap-4">
              <Link to="blogs">Blog</Link>
              <Link to="blog">Blog Post</Link>
              <Link to="contact">Contact</Link>
              <Link to="faqs">FAQS</Link>
              <Link to="coming-soon">Coming Soon</Link>
              <Link to="subscribe">Subscribe us</Link>
            </div>
          </section>

          <section>
            <h3 className="mt-6 mb-6 md:mt-0 font-semibold text-xl">
              Follow us
            </h3>

            <div className="flex flex-col gap-2 md:gap-4">
              <Link to="blogs">Facebook</Link>
              <Link to="blog">Twitter</Link>
              <Link to="contact">Instagram</Link>
              <Link to="faqs">LinkedIn</Link>
              <Link to="coming-soon">Youtube</Link>
            </div>
          </section>
        </nav>
      </section>

      <aside className="border-t-2 border-gray-50 py-5 mt-6">
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
