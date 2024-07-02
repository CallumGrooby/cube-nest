import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Homepage } from "./pages/HomePage.jsx";
import { AboutUs } from "./pages/AboutUs.jsx";
import { NewsPage } from "./pages/NewsPage.jsx";
import { ProductsPage } from "./pages/ProductsPage.jsx";
import { ContactPage } from "./pages/ContactPage.jsx";

import ErrorPage from "./ErrorPage.jsx";
import { Navbar } from "./components/Navbar.jsx";
import { ProductPage } from "./pages/ProductPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    errorElement: <ErrorPage />,

    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/news",
        element: <NewsPage />,
      },
      {
        path: "/products/:productsType",
        element: <ProductsPage />,
      },
      {
        path: "/product/:productId",
        element: <ProductPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
