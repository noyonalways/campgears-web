import { BsCashStack } from "react-icons/bs";
import { FaRegCreditCard, FaStripe } from "react-icons/fa6";
import { FiMapPin } from "react-icons/fi";
import { HiChevronLeft } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { useGetAllProductQuery } from "../../redux/features/product/productApi";
import { useAppSelector } from "../../redux/hook";
import CheckoutProductCard from "./checkout-product-card";

interface IProps {}

const Checkout: React.FC<IProps> = () => {
  const {
    items,
    appliedDiscountCode,
    subtotal,
    shippingCharge,
    discountAmount,
    totalPrice,
    totalPriceAfterDiscount,
  } = useAppSelector((store) => store.cart);
  const { data: products } = useGetAllProductQuery(undefined);

  const cartProducts = products?.data
    .filter((product) => items.find((item) => item._id === product._id))
    .map((product) => {
      const cartItem = items.find((item) => item._id === product._id);
      return { ...product, quantity: cartItem?.quantity || 1 };
    });

  return (
    <section className="py-8 font-montserrat">
      <div className="container">
        <div className="flex justify-between mb-8 text-black">
          <Link to={`/cart`} className="hover:text-primary">
            <HiChevronLeft size={28} />
          </Link>
          <h1 className="text-xl font-medium text-end">Checkout</h1>
        </div>
        <div className="flex flex-col space-y-12 lg:space-y-0 lg:flex-row lg:justify-between lg:space-x-6 lg:items-start">
          <div className="lg:flex-1">
            <div className="w-full">
              <div className="flex items-center space-x-4">
                <span className="rounded-full bg-primary text-white size-10 p-2 flex items-center justify-center">
                  <FiMapPin size={20} className="w-full" />
                </span>
                <h2 className="text-lg">Shipping Address</h2>
              </div>
              <div className="grid grid-cols-1 gap-4 mt-6 w-full mb-8">
                <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
                  <div className="lg:basis-1/2 space-y-4">
                    <label htmlFor="userFullName">Full Name</label>
                    <input
                      className="w-full p-2 focus:border-primary outline-none border rounded"
                      type="text"
                      name="userFullName"
                      id="userFullName"
                    />
                  </div>

                  <div className="lg:basis-1/2 space-y-4">
                    <label htmlFor="phone">Phone</label>
                    <input
                      className="w-full p-2 focus:border-primary outline-none border rounded"
                      type="text"
                      name="phone"
                      id="phone"
                    />
                  </div>
                </div>
                <label htmlFor="phone">Email</label>
                <input
                  className="w-full p-2 focus:border-primary outline-none border rounded"
                  type="email"
                  name="email"
                  id="email"
                />

                <label htmlFor="shippingAddress">Shipping Address</label>
                <input
                  className="w-full p-2 focus:border-primary outline-none border rounded"
                  type="text"
                  name="shippingAddress"
                  id="shippingAddress"
                />
              </div>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <span className="rounded-full bg-primary text-white size-10 p-2 flex items-center justify-center">
                    <FaRegCreditCard size={20} className="w-full" />
                  </span>
                  <h2 className="text-lg">Payment Method</h2>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center border p-4 space-x-4 rounded text-black hover:border-primary duration-200">
                    <span>
                      <BsCashStack size={20} />
                    </span>
                    <span className=" font-semibold">Cash on Delivery</span>
                  </div>
                  <div className="flex items-center border p-4 space-x-4 rounded text-black hover:border-primary duration-200">
                    <span>
                      <FaStripe size={24} />
                    </span>
                    <span className=" font-semibold">Stripe</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-secondary lg:basis-2/6 p-4 rounded">
            <h2 className="text-lg font-medium mb-4">Order Summer</h2>
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
            {appliedDiscountCode && (
              <div className="mb-4">
                <span className="mb-2 inline-block">Applied Discount code</span>
                <input
                  className="p-2 w-full rounded outline-none border"
                  readOnly
                  type="text"
                  value={appliedDiscountCode}
                />
              </div>
            )}
            <div className="text-sm space-y-4">
              <div className="font-medium flex justify-between">
                <span>Cart Subtotal</span>
                <span>$ {subtotal}</span>
              </div>
              <div className="font-medium flex justify-between">
                <span>Shipping Charge</span>
                <span>$ {shippingCharge}</span>
              </div>
              <div className="font-medium flex justify-between">
                <span>Discount Amount</span>
                <span>$ {discountAmount}</span>
              </div>
              <div className="font-medium flex justify-between">
                <span>Total</span>
                <span>$ {totalPrice}</span>
              </div>
              <div className="text-base font-semibold flex justify-between">
                <span>Order Total</span>
                <span>$ {totalPriceAfterDiscount}</span>
              </div>
              <button className="btn w-full py-3 rounded">Place Order</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
