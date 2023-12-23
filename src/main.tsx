import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Services from "./pages/services";
import About from "./pages/about";
import Home from "./pages/home";
import Header from "./shared/components/Header";
import Footer from "./shared/components/CustomFooter";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/service",
    element: <Services />,
  },
  
]);


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div className="container mx-auto">
      <Header />
      <RouterProvider router={router} />
    </div>
    <Footer />
  </React.StrictMode>
);
