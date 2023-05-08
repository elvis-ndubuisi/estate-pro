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

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <div>home</div> },
      { path: "about-us", element: <div>about</div> },
      { path: "contact", element: <Contact /> },
      { path: "blogs", element: <div>blogs</div> },
      { path: "blogs/:blogId", element: <div>blog</div> },
      { path: "agents", element: <div>agents</div> },
      { path: "agents/agentId", element: <div>agent</div> },
      { path: "properties", element: <div>properties</div> },
      { path: "properties/propertyId", element: <div>property</div> },
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
