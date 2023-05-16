import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";

import Layout from "./layout";
import NotFound from "./pages/not-found";
import Subscribe from "./pages/subscribe";
import FAQs from "./pages/faqs";
import ComingSoon from "./pages/coming-soon";
import Contact from "./pages/contact";
import Home from "./pages/home";
import AboutUs from "./pages/about-us";
import Blogs from "./pages/blogs";
import Blog from "./pages/blog";
import Agents from "./pages/agents";
import Agent from "./pages/agent";
import Properties from "./pages/properties";
import Property from "./pages/property";
// import PostProperty from "./pages/post-property";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <Home /> },
      { path: "about-us", element: <AboutUs /> },
      { path: "contact", element: <Contact /> },
      { path: "blogs", element: <Blogs /> },
      { path: "blogs/:blogId", element: <Blog /> },
      { path: "agents", element: <Agents /> },
      { path: "agents/:agentId", element: <Agent /> },
      { path: "properties", element: <Properties /> },
      {
        path: "properties/create-property",
        element: <NotFound />,
      },
      { path: "properties/:propertyId", element: <Property /> },
      { path: "subscribe", element: <Subscribe /> },
      { path: "faqs", element: <FAQs /> },
      { path: "coming-soon", element: <ComingSoon /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
);
