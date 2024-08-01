import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Cart from "../pages/cart";
import HomePage from "../pages/home";
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
    ],
  },
]);

export default router;
