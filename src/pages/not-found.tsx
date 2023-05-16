import SubscribeBanner from "../components/SubscribeBanner";
import Button from "../components/Button";
import notFoundIllustration from "../assets/illustrations/404 error with portals-pana.svg";
import NavBar from "../components/NavBar";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  return (
    <>
      <NavBar />
      <main className="px-2 mt-16">
        <img
          src={notFoundIllustration}
          alt="not found page error illustration"
          className="max-h-[65vh] mx-auto object-contain mt-2 mb-6"
        />
        <section className="text-lg flex flex-col gap-6">
          <h2 className="font-bold text-4xl text-center capitalize">
            page Not found
          </h2>

          <p className="text-center max-w-lg mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error,
            quam, maiores tempore suscipit possimus officiis
          </p>

          <div className="flex items-center justify-center gap-6 flex-wrap">
            <Button showAs="primary" onClick={() => navigate("/")}>
              Go to Home
            </Button>
            <Button showAs="outline" onClick={() => navigate("/properties")}>
              Browse Properties
            </Button>
          </div>
        </section>
        <SubscribeBanner />
      </main>
    </>
  );
}

export default NotFound;
