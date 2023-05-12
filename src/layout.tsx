import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import { ScrollRestoration } from "react-router-dom";

function Layout() {
  return (
    <>
      <Outlet />
      <Footer />
      <ScrollRestoration />
    </>
  );
}

export default Layout;
