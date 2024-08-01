import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AboutUs from "../pages/about-us";
import Cart from "../pages/cart";
import HomePage from "../pages/home";
import NotFound from "../pages/not-found";
import ProductDetails from "../pages/product-details";
import ProductManagement from "../pages/product-management";
import Products from "../pages/products";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/products/:productSlug",
        element: <ProductDetails />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/product-management",
        element: <ProductManagement />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
