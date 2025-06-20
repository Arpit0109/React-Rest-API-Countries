import { createBrowserRouter, RouterProvider } from "react-router-dom";


import { createRoot } from "react-dom/client";
import React from "react";

import App from "./App";
import Contact from "./components/Contact";
import Home from "./components/Home";
import ErrorElement from "./components/ErrorElement";
import CountriesDetail from "./components/CountriesDetail";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement:<ErrorElement/>,

    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
       {
        path: "/:CountriesDetail",
        element: <CountriesDetail />,

      },
    ],
  },
]);

const root = createRoot(document.getElementById("root"));

root.render(<RouterProvider router={router} />);
