import NavBar from "../components/NavBar";
import SubscribeBanner from "../components/SubscribeBanner";
import blogs from "../assets/data/blogs";
import { useParams } from "react-router-dom";
import dummy from "../assets/houses/rowan-heuvel-bjej8BY1JYQ-unsplash.jpg";

function Blog() {
  const params = useParams();
  const blog = blogs.find((b) => b.slug === params?.blogId);
  return (
    <>
      <NavBar />
      <main className="max-w-screen-xl mx-auto px-2">
        <section className="h-[60vh] flex flex-col justify-end items-center">
          <h1 className="font-semibold text-4xl md:text-5xl text-center mb-8 capitalize max-w-4xl">
            the future of real estate: trends to watch out for in 2023
          </h1>
          <h2 className="mb-12">- Tom Holland</h2>
        </section>

        <img
          src={blog?.cover}
          className="w-full max-h-[80vh] aspect-video rounded-md object-cover object-center"
        />

        <section className="max-w-3xl mx-auto text-left md:text-lg">
          <h2 className="text-stone-900 text-3xl font-semibold my-6">
            The real estate industry has always been dynamic
          </h2>

          <p className="text-gray-800 my-6">
            The real estate has always been dynamic, and as we look ahead of
            2023, there are several trends that are likely to shape the market.
            Whether you're a real estate investor, homeowner, a simple someone
            who is interested in the industry, here are some trends to watch out
            for
          </p>

          <ol className="my-6 text-gray-800">
            <li>Technology will continue to disrupt the industry</li>
            <li>Sustainability will become a key consideration</li>
            <li>The housing shortage will persist</li>
            <li>Homeownership will remain a key goal for many</li>
          </ol>

          <p className="text-gray-800  my-6">
            The COVID-19 pandemic has accelerated the trend towards remote work,
            and this is likely to have a lasting impact on the real estate
            market in the coming years. We may see more people moving away from
            traditional job centers and into more affordable, suburban areas.
            This could create new opportunities for real estate investors and
            developers, as well as challenges for those in more urban markets
          </p>

          <img
            src={dummy}
            className="w-full aspect-video max-h-[50vh] rounded-md object-cover object-center"
          />

          <p className="text-gray-800 my-6">
            In conclusion, the real estate industry is constantly evolving, and
            we can expect to see many challenges in the coming years. Whether
            it's new technology, a growing focus on sustainability, or the
            impact of remote work. real estate professionals will need to be
            prepared to adapt to these trends and find new ways to succeed in an
            ever-changing market.
          </p>

          <blockquote className="bg-gray-200 rounded-md p-8 font-medium">
            "In an industry as dynamic as real estate, it's crucial to stay
            ahead of the curve and be prepared to adapt to new trends. Whether
            it's embracing new technology, prioritizing sustainability, or
            finding new ways to meet the evolving needs of buyers and sellers,
            those who are willing to innovate and stay nimble will be the ones
            who succeed in the years ahead."
          </blockquote>
        </section>

        <SubscribeBanner />
      </main>
    </>
  );
}

export default Blog;
