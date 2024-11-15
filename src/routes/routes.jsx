import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home";
import Products from "../pages/products";
import About from "../pages/about";
import Contact from "../pages/Contact";
import LogIn from "../pages/LogIn";
import { Register } from "../pages/Register";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      children:[
        {
            path: "/",
            element: <Home/>,
        },
        {
            path: "/products",
            element: <Products/>,
        },
        {
            path: "/about",
            element: <About/>,
        },
        {
            path: "/contact-us",
            element: <Contact/>,
        },
        {
            path: "/login",
            element: <LogIn/>,
        },
        {
            path: "/register",
            element: <Register/>,
        },
      ]
    },
  ]);