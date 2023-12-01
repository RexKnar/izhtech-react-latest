import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import About from "./pages/about/About";
import Home from "./pages/home/Home";
import Header from "./shared/components/Header";
import Footer from "./shared/components/Footer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div className="container mx-auto">
      <Header />
      <RouterProvider router={router} />
      <Footer />
    </div>
  </React.StrictMode>
);
