import React, { useEffect } from "react";
import { BsCheckCircle } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import PageTitle from "../../components/page-title";
import { clearCart } from "../../redux/features/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hook";

const OrderSuccess: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { orderedUserEmail } = useAppSelector((store) => store.cart);

  useEffect(() => {
    dispatch(clearCart());
    if (!orderedUserEmail) {
      navigate("/products", { replace: true });
    }
  }, [dispatch, orderedUserEmail, navigate]);

  return (
    <>
      <PageTitle title="Order Success - Campgears" />
      <section className="py-32 font-montserrat">
        <div className="container text-center">
          <div className="flex flex-col items-center justify-center space-y-6">
            <BsCheckCircle className="text-green-500 text-6xl inline-block mx-auto" />
            <h1 className="text-xl lg:text-2xl font-bold">
              Order Placed Successfully!
            </h1>
            <p className="font-roboto w-full max-w-lg mx-auto">
              Thank you for your purchase. Your order has been successfully
              placed and is being processed. You will receive an email
              confirmation shortly.
            </p>
            <div className="flex items-center space-x-4">
              <Link
                to="/products"
                className="text-xs md:text-base px-3 bg-primary py-2 rounded text-white active:scale-95 duration-100 hover:bg-transparent hover:text-primary border border-primary"
              >
                Continue Shopping
              </Link>
              <Link
                to="/order-history"
                className="text-xs md:text-base px-3 bg-primary py-2 rounded text-white active:scale-95 duration-100 hover:bg-transparent hover:text-primary border border-primary"
              >
                View Order History
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OrderSuccess;
