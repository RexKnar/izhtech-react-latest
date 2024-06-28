import React from "react";
import ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Services from "./pages/services";
import About from "./pages/about";
import Home from "./pages/home";
import Contact from "./pages/contact";
import Branding from "./pages/branding";
import BlogDetail from "./pages/BlogDetail";
import MobileApplication from "./pages/mobile-Apllication";
import DigitalMarketing from "./pages/digital-marketing";
import CommonLayout from "./shared/layouts/CommonLayout";
import WebApplication from "./pages/Web-Application";

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
const router = createBrowserRouter([
  {
    path: "/",
    element: <CommonLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/service", element: <Services /> },
      { path: "/blog-detail", element: <BlogDetail /> },
      { path: '/webapplication', element: <WebApplication /> },
      {path:"/mobileapplication",element:<MobileApplication />},
      { path: "/digitalmarketing", element: <DigitalMarketing /> },
      { path: "/service-detail", element: <Branding /> },
  
    ],
  },
]);
const queryClient = new QueryClient()
ReactDOM.render(
  <React.StrictMode>
    
    <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
