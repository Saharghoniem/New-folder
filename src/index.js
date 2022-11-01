import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Country from "./pages/Country";
import HTML from "./pages/Egypt";
import Css from "./pages/German";
import Javascript from "./pages/England";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Country />,
    errorElement: <h1>SORROY.........</h1>,
  },

  {
    path: "/html",
    element: <HTML />,
  },

  {
    path: "/css",
    element: <Css />,
  },
  {
    path: "/javascript",
    element: <Javascript />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
