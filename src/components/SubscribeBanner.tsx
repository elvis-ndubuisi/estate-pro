import Input from "./inputs/Input";
import Button from "./Button";

function SubscribeBanner() {
  return (
    <section className="max-w-screen-xl mx-auto rounded-xl my-12 p-12 bg-red-500 text-gray-200">
      <div className="flex flex-col items-center md:flex-row justify-around gap-4">
        <h3 className="font-semibold text-2xl">
          Subscribe to our weekly newsletter
        </h3>
        <section className="mt-3 md:bg-white rounded-md p-2 flex flex-col items-stretch md:flex-row md:items-center gap-4">
          <Input
            placeholder="Enter email address"
            exStyles="focus:ring-0 hover:ring-0 bg-transparent text-stone-950 py-4 bg-white/70 placeholder:text-gray-500 md:placeholder:text-gray-800 md:bg-white"
          />
          <Button exStyles="py-4 bg-white text-stone-950 md:bg-red-500 md:text-white">
            Get in Touch
          </Button>
        </section>
      </div>
    </section>
  );
}

export default SubscribeBanner;
