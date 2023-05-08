import SubscribeBanner from "../components/SubscribeBanner";
import constructionIllustration from "../assets/illustrations/Construction truck-rafiki.svg";
import NavBar from "../components/NavBar";

function ComingSoon() {
  return (
    <>
      <NavBar />
      <main className="px-2 mt-16">
        <img
          src={constructionIllustration}
          alt="not found page error illustration"
          className="max-h-[65vh] mx-auto object-contain mb-6"
        />
        <section className="text-lg flex flex-col gap-6">
          <h2 className="font-semibold max-w-md mx-auto text-4xl text-center capitalize">
            Our website is under construction
          </h2>

          <p className="text-center max-w-lg mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error,
            quam, maiores tempore suscipit possimus officiis
          </p>
        </section>
        <SubscribeBanner />
      </main>
    </>
  );
}

export default ComingSoon;
