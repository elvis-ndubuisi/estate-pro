import Button from "../components/Button";
import NavBar from "../components/NavBar";
import SubscribeBanner from "../components/SubscribeBanner";
import Input from "../components/inputs/Input";

function PostProperty() {
  return (
    <>
      <NavBar />
      <main className="max-w-screen-xl mx-auto px-2 text-stone-950">
        <div className="h-[50vh] mt-12 flex flex-col gap-6 items-center lg:flex-row lg:items-center lg:justify-around lg:pt-16">
          <h1 className="font-semibold text-5xl leading-[1.2] md:max-w-xl lg:max-w-lg lg:flex-1">
            Post Your Property
          </h1>

          <div className="flex flex-col gap-6 items-start lg:max-w-lg lg:flex-1">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
              sapiente eos odio omnis consequatur.
            </p>
            <div className="flex items-center gap-4">
              <Button showAs="primary">Join our team</Button>
              <Button showAs="outline" exStyles="border-gray-200 font-medium">
                Know more
              </Button>
            </div>
          </div>
        </div>

        <form className="max-w-5xl mx-auto flex flex-col gap-6">
          <h3>Client Info</h3>
          <fieldset>
            <Input placeholder="Enter Your Full Name" />
            <Input placeholder="Email Address" />
            <Input placeholder="Your Phone Number" />
          </fieldset>
        </form>
      </main>
      <SubscribeBanner />
    </>
  );
}

export default PostProperty;
