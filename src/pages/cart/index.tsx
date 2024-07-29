import { HiChevronDown } from "react-icons/hi2";
import Button from "../../components/ui/button";
import CartCard from "./cart-card";

interface IProps {}

const Cart: React.FC<IProps> = () => {
  return (
    <section className="py-10 text-black">
      <div className="container font-montserrat">
        <h1 className="text-xl font-medium text-end mb-6">Shopping Cart</h1>
        <div className="flex flex-col-reverse lg:flex-row lg:justify-between lg:items-start">
          <div className="lg:basis-[72%]">
            <div className="hidden lg:flex justify-between items-center mb-4 font-medium">
              <span>Item</span>
              <div className="flex space-x-16">
                <span>Price</span>
                <span>Quantity</span>
                <span>Subtotal</span>
              </div>
            </div>
            <div className="space-y-6 mb-6">
              <CartCard />
              <CartCard />
              <CartCard />
            </div>
            <div className="flex flex-col space-y-3 lg:space-y-0 lg:flex-row items-center justify-between">
              <button className="btn-outline">Continue Shopping</button>
              <div className="flex items-center space-x-3 lg:space-x-4">
                <button className="btn-outline">Clear Shopping Cart</button>
                <button className="btn-outline">Update Cart</button>
              </div>
            </div>
          </div>
          <div className="bg-[#E7ECEF] p-6 rounded space-y-6 lg:basis-[26%] flex flex-col mb-6 lg:mb-0">
            <h3 className="text-lg font-semibold border-b border-b-[#DDD9D9] pb-1">
              Summary
            </h3>
            <div className="flex justify-between items-center">
              <span>Subtotal</span>
              <span>$ 229.99</span>
            </div>
            <div className="flex justify-between items-center border-b border-b-[#DDD9D9] pb-1">
              <span>Shipping Charge</span>
              <span>$ 30.00</span>
            </div>
            <div className="flex justify-between items-center border-b border-b-[#DDD9D9] pb-1">
              <span className="font-semibold">Total Price</span>
              <span className="font-medium">$ 259.99</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Apply Discount Code</span>
              <HiChevronDown />
            </div>
            <Button>Proceed To Checkout</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
