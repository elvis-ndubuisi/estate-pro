import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";

import Layout from "./_layout";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <div>home</div> },
      { path: "about-us", element: <div>about</div> },
      { path: "contact", element: <div>contact</div> },
      { path: "blogs", element: <div>blogs</div> },
      { path: "blogs/:blogId", element: <div>blog</div> },
      { path: "agents", element: <div>agents</div> },
      { path: "agents/agentId", element: <div>agent</div> },
      { path: "properties", element: <div>properties</div> },
      { path: "properties/propertyId", element: <div>property</div> },
      { path: "subscribe", element: <div>subscribe</div> },
      { path: "faqs", element: <div>faqs</div> },
      { path: "coming-soon", element: <div>coming soon</div> },
      { path: "*", element: <div>not found</div> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
);
