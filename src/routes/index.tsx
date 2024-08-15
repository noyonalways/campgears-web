import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AboutUs from "../pages/about-us";
import Cart from "../pages/cart";
import Checkout from "../pages/checkout";
import HomePage from "../pages/home";
import NotFound from "../pages/not-found";
import ProductDetails from "../pages/product-details";
import ProductManagement from "../pages/product-management";
import Products from "../pages/products";
import Wishlist from "../pages/wishlist";

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
        path: "/products/:slug",
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
        path: "/checkout",
        element: <Checkout />,
      },
      {
        path: "/product-management",
        element: <ProductManagement />,
      },
      {
        path: "/wishlist",
        element: <Wishlist />,
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
