import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Home from "./routes/Home.jsx";
import About from "./routes/About.jsx";
import React from "react";
import { LazyLoading } from "./Components/LazyLoading/LazyLoading.jsx";
import ProductsDetails from "./Components/ProductsDetails/ProductsDetails.jsx";
import Root from "./routes/Root.jsx";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <div>error</div>,
    children: [
      {
        index: true,
        element: (
          <React.Suspense>
            <LazyLoading />
          </React.Suspense>
        ),
      },
      {
        path: ":productId",
        element: <ProductsDetails />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={routes} />
);
