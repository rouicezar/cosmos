import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./Layout.jsx";
import { Home } from "./pages/Home.jsx";
import { TopicDetail } from "./pages/TopicDetail.jsx";
import { ColdFeed } from "./pages/ColdFeed.jsx";
import { ScaleJourney } from "./pages/ScaleJourney.jsx";
import "./styles.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "scale", element: <ScaleJourney /> },
      { path: "topic/:id", element: <TopicDetail /> },
      { path: "cold", element: <ColdFeed /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
