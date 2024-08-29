import { useState } from "react";
import { HiXMark } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { useGetAllProductQuery } from "../../redux/features/product/productApi";
import { useAppSelector } from "../../redux/hook";
import CartSidebarCard from "./cart-siderbar-card";

interface IProps {}

const CartSidebar: React.FC<IProps> = () => {
  const { items, subtotal, totalItems } = useAppSelector((store) => store.cart);
  const { data: products } = useGetAllProductQuery("limit=12", {
    refetchOnFocus: true,
  });
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // TODO: Need to make for efficient -> Filter and add quantity from cart items to the cartProducts array
  const cartProducts = products?.data
    .filter((product) => items.find((item) => item._id === product._id))
    .map((product) => {
      const cartItem = items.find((item) => item._id === product._id);
      return { ...product, quantity: cartItem?.quantity || 1 };
    });

  return (
    <div
      className={`${
        totalItems > 0 && !isSidebarOpen
          ? "block w-full lg:w-auto right-0"
          : "hidden right-10"
      } fixed top-0 z-30 bg-white border h-screen font-montserrat overflow-y-scroll flex flex-col duration-500`}
    >
      <div className="flex-1">
        <div className="mb-2 bg-secondary px-4  py-2 flex items-center justify-between">
          <h1 className="text-xl font-semibold">Shopping Cart</h1>
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="text-2xl hover:bg-white rounded p-2"
          >
            <HiXMark />
          </button>
        </div>
        <div className="p-4 space-y-4">
          {cartProducts?.map((product) => (
            <CartSidebarCard
              key={product._id}
              _id={product._id}
              name={product.name}
              image={product.image}
              price={product.price}
              slug={product.slug}
              cartAddedQuantity={product.quantity}
              stockQuantity={product.stockQuantity}
            />
          ))}
        </div>
      </div>
      <div>
        <div>
          <div className="px-4 flex justify-between">
            <h1 className="text-lg font-semibold">Subtotal</h1>
            <h1 className="text-lg font-semibold">${subtotal.toFixed(2)}</h1>
          </div>
        </div>
        <div className="flex w-full flex-1 p-4 space-x-4 ">
          <Link className="btn rounded w-full text-center" to="/cart">
            View Cart
          </Link>
          <Link className="btn rounded w-full text-center" to="/checkout">
            Checkout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartSidebar;
