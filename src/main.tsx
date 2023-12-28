import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Services from "./pages/services";
import About from "./pages/about";
import Home from "./pages/home";
import Contact from "./pages/contact";
import Header from "./shared/components/Header";
import Footer from "./shared/components/CustomFooter";
import Branding from "./pages/branding";

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
    path: "/contact",
    element: <Contact/>,
  },
  {
    path: "/service",
    element: <Services />,
  },
  {
    path: "/branding",
    element: <Branding/>
  }
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
