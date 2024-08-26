import { loadStripe } from "@stripe/stripe-js";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { BsCashStack } from "react-icons/bs";
import { CgSpinner } from "react-icons/cg";
import { FaRegCreditCard, FaStripe } from "react-icons/fa6";
import { FiMapPin } from "react-icons/fi";
import { HiChevronLeft } from "react-icons/hi2";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import Loading from "../../components/loading";
import PageTitle from "../../components/page-title";
import { clearCart } from "../../redux/features/cart/cartSlice";
import { useCreateOrderMutation } from "../../redux/features/order/orderApi";
import { useGetAllProductQuery } from "../../redux/features/product/productApi";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { INewOrder, INewOrderItem } from "../../types/order.type";
import CheckoutCalculations from "./checkout-calculations";
import CheckoutProductCard from "./checkout-product-card";

interface IFormInputs {
  userFullName: string;
  userEmail: string;
  userPhone: string;
  shippingAddress: string;
  paymentMethod: "cash" | "stripe";
}

const Checkout: React.FC = () => {
  const { items, appliedDiscountCode, shippingCharge, tax } = useAppSelector(
    (store) => store.cart
  );
  const { data: products, isLoading: productIsLoading } =
    useGetAllProductQuery(undefined);
  const [createOrder, { isLoading: orderIsLoading }] = useCreateOrderMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<IFormInputs>();

  const selectedPaymentMethod = watch("paymentMethod");
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const cartProducts = products?.data
    .filter((product) => items.find((item) => item._id === product._id))
    .map((product) => {
      const cartItem = items.find((item) => item._id === product._id);
      return { ...product, quantity: cartItem?.quantity || 1 };
    });

  const onSubmit = async (data: IFormInputs) => {
    const stripe = await loadStripe(
      import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY
    );
    const orderItems: INewOrderItem[] = cartProducts!.map((product) => ({
      productId: product._id,
      name: product.name,
      quantity: product.quantity,
      price: product.price,
      image: product.image,
    }));

    const discount = appliedDiscountCode ? { code: appliedDiscountCode } : null;
    const newOrder: INewOrder = {
      ...data,
      orderItems,
      shippingCost: shippingCharge,
      tax,
      discount,
    };

    try {
      const res = await createOrder(newOrder).unwrap();
      if (res.success) {
        if (res.data.transactionId && res.data.sessionId) {
          stripe?.redirectToCheckout({ sessionId: res.data.sessionId });
          dispatch(clearCart());
        } else {
          navigate(
            `/payment/confirmation?email=${res.data.email}&transactionId=${res.data.transactionId}`
          );
        }
      }
    } catch (err) {
      console.log(err);
      toast.error("Failed to create order. Please try again.", {
        id: "orderError",
        position: "top-right",
        className: "text-red-500",
      });
    }
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <PageTitle title="Checkout - Campgears" />
      <section className="py-8 font-montserrat">
        <div className="container">
          {items.length === 0 ? (
            <div className="text-center py-28 space-y-4 flex flex-col items-center">
              <p>Your shopping cart is empty.</p>
              <Link to="/products" className="btn inline-block">
                Shop Now
              </Link>
            </div>
          ) : (
            <>
              <div className="flex justify-between mb-8 text-black">
                <Link to={`/cart`} className="hover:text-primary">
                  <HiChevronLeft size={28} />
                </Link>
                <h1 className="text-xl font-medium text-end">Checkout</h1>
              </div>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col space-y-12 lg:space-y-0 lg:flex-row lg:justify-between lg:space-x-6 lg:items-start"
              >
                {orderIsLoading ? (
                  <div className="lg:flex-1 flex justify-center items-center h-80">
                    <Loading />
                  </div>
                ) : (
                  <div className="lg:flex-1">
                    <div>
                      <div className="w-full">
                        <div className="flex items-center space-x-4">
                          <span className="rounded-full bg-primary text-white size-10 p-2 flex items-center justify-center">
                            <FiMapPin size={20} className="w-full" />
                          </span>
                          <h2 className="text-lg">Shipping Address</h2>
                        </div>
                        <div className="grid grid-cols-1 gap-4 mt-6 w-full mb-8">
                          <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
                            <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.5 }}
                              className="lg:basis-1/2"
                            >
                              <label
                                className="mb-3 inline-block"
                                htmlFor="userFullName"
                              >
                                Full Name
                              </label>
                              <input
                                className="w-full p-2 focus:border-primary outline-none border rounded"
                                type="text"
                                {...register("userFullName", {
                                  required: "Full Name is required",
                                })}
                                id="userFullName"
                              />
                              {errors.userFullName && (
                                <span className="text-red-500 text-sm inline-block mt-2">
                                  {errors.userFullName.message}
                                </span>
                              )}
                            </motion.div>

                            <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.5 }}
                              className="lg:basis-1/2"
                            >
                              <label
                                className="mb-3 inline-block"
                                htmlFor="phone"
                              >
                                Phone
                              </label>
                              <input
                                className="w-full p-2 focus:border-primary outline-none border rounded"
                                type="text"
                                {...register("userPhone", {
                                  required: "Phone number is required",
                                })}
                                id="phone"
                              />
                              {errors.userPhone && (
                                <span className="text-red-500 text-sm inline-block mt-2">
                                  {errors.userPhone.message}
                                </span>
                              )}
                            </motion.div>
                          </div>

                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                          >
                            <label
                              className="mb-3 inline-block"
                              htmlFor="email"
                            >
                              Email
                            </label>
                            <input
                              className="w-full p-2 focus:border-primary outline-none border rounded"
                              type="email"
                              {...register("userEmail", {
                                required: "Email is required",
                              })}
                              id="email"
                            />
                            {errors.userEmail && (
                              <span className="text-red-500 text-sm inline-block mt-2">
                                {errors.userEmail.message}
                              </span>
                            )}
                          </motion.div>

                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
                          >
                            <label
                              className="mb-3 inline-block"
                              htmlFor="shippingAddress"
                            >
                              Shipping Address
                            </label>
                            <input
                              className="w-full p-2 focus:border-primary outline-none border rounded"
                              type="text"
                              {...register("shippingAddress", {
                                required: "Shipping Address is required",
                              })}
                              id="shippingAddress"
                            />
                            {errors.shippingAddress && (
                              <span className="text-red-500 text-sm mt-2 inline-block">
                                {errors.shippingAddress.message}
                              </span>
                            )}
                          </motion.div>
                        </div>

                        <div>
                          <div className="flex items-center space-x-4 mb-6">
                            <span className="rounded-full bg-primary text-white size-10 p-2 flex items-center justify-center">
                              <FaRegCreditCard size={20} className="w-full" />
                            </span>
                            <h2 className="text-lg">Payment Method</h2>
                          </div>
                          <div className="space-y-4">
                            <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.8 }}
                            >
                              <label
                                htmlFor="cash"
                                className={`font-medium cursor-pointer p-4 w-full flex justify-between hover:border-primary rounded ${
                                  selectedPaymentMethod === "cash"
                                    ? "border-primary border"
                                    : "border"
                                }`}
                              >
                                <div className="flex space-x-4">
                                  <BsCashStack size={20} />
                                  <span>Cash on Delivery</span>
                                </div>
                                <input
                                  type="radio"
                                  value="cash"
                                  {...register("paymentMethod", {
                                    required: "Select a payment method",
                                  })}
                                  id="cash"
                                />
                              </label>
                            </motion.div>
                            <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.9 }}
                            >
                              <label
                                htmlFor="stripe"
                                className={`font-medium cursor-pointer p-4 w-full flex justify-between hover:border-primary rounded ${
                                  selectedPaymentMethod === "stripe"
                                    ? "border-primary border"
                                    : "border"
                                }`}
                              >
                                <div className="flex space-x-4">
                                  <FaStripe size={24} />
                                  <span>Stripe</span>
                                </div>
                                <input
                                  type="radio"
                                  value="stripe"
                                  {...register("paymentMethod", {
                                    required: "Select a payment method",
                                  })}
                                  id="stripe"
                                />
                              </label>
                            </motion.div>
                          </div>
                          {errors.paymentMethod && (
                            <span className="text-red-500 text-sm inline-block mt-2">
                              {errors.paymentMethod.message}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                <div className="bg-secondary lg:basis-2/6 p-4 rounded">
                  <h2 className="text-lg font-medium mb-4">Order Summary</h2>
                  {productIsLoading ? (
                    <div className="flex justify-center py-4">
                      <CgSpinner className="animate-spin text-primary text-4xl" />
                    </div>
                  ) : (
                    <div className="mb-4 space-y-2">
                      {cartProducts?.map((product) => (
                        <CheckoutProductCard
                          _id={product._id}
                          image={product.image}
                          name={product.name}
                          price={product.price}
                          quantity={product.quantity}
                          slug={product.slug}
                          key={product._id}
                        />
                      ))}
                    </div>
                  )}
                  {appliedDiscountCode && (
                    <div className="mb-4">
                      <span className="mb-2 inline-block">
                        Applied Discount Code
                      </span>
                      <input
                        className="p-2 w-full rounded outline-none border"
                        readOnly
                        type="text"
                        value={appliedDiscountCode}
                      />
                    </div>
                  )}
                  <CheckoutCalculations />
                  {orderIsLoading ? (
                    <div className="flex justify-center mt-6 items-center space-x-2 bg-primary rounded p-3">
                      <CgSpinner className="animate-spin text-white text-xl" />
                      <span className="text-white">Placing Order...</span>
                    </div>
                  ) : (
                    <button
                      className="btn w-full py-3 rounded mt-6"
                      type="submit"
                    >
                      Place Order
                    </button>
                  )}
                </div>
              </form>
            </>
          )}
        </div>
      </section>
    </motion.div>
  );
};

export default Checkout;
