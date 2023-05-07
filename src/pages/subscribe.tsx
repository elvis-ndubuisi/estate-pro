import Button from "../components/Button";
import subscribeIllustration from "../assets/Envelope-rafiki.svg";

function Subscribe() {
  return (
    <main className="px-2 max-w-screen-xl mx-auto flex flex-col lg:flex-row lg:items-center gap-6 my-12 text-stone-950">
      <section className="text-center flex flex-col gap-6 items-center lg:flex-1 lg:items-start">
        <h2 className="font-semibold text-4xl capitalize lg:text-5xl lg:text-left">
          Subscribe Our Newsletter
        </h2>
        <p className="text-lg max-w-xl text-gray-700 lg:text-left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,
          tempore? Quasi excepturi beatae doloribus veniam facere libero.
          Voluptatem consequuntur nisi veritatis
        </p>

        <form className="flex flex-col md:flex-row">
          <input type="text" name="" id="" placeholder="Enter email address" />
          <Button showAs="primary" type="submit">
            Get in Touch
          </Button>
        </form>
      </section>

      <img
        src={subscribeIllustration}
        alt="subscribe to us illustration"
        className="max-h-[60vh] object-contain lg:flex-1"
      />
    </main>
  );
}

export default Subscribe;
