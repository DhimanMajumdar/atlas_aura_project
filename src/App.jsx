import React, { createRef } from "react";
import Home from "./pages/Home";
import "./App.css";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./pages/About";
import Country from "./pages/Country";
import Contact from "./pages/Contact";
import AppLayout from "./components/AppLayout";
import ErrorPage from "./pages/ErrorPage";
import CountryDetails from "./components/Layout/countryDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "country",
        element: <Country />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "country/:id",
        element: <CountryDetails />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
