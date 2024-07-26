import { HiChevronDown } from "react-icons/hi2";
import Button from "../../components/ui/button";

interface IProps {}

const Cart: React.FC<IProps> = () => {
  return (
    <section className="py-10">
      <div className="container font-montserrat">
        <h1 className="text-xl font-medium text-end mb-6">Shopping Cart</h1>
        <div className="flex justify-between">
          <div>
            <div></div>
            <div>ProductCard</div>
          </div>
          <div className="bg-[#E7ECEF] p-6 rounded space-y-4">
            <h3 className="text-lg font-semibold border-b border-b-[#DDD9D9] pb-1">
              Summary
            </h3>
            <div className="flex justify-between items-center">
              <span>Subtotal</span>
              <span>229.99</span>
            </div>
            <div className="flex justify-between items-center border-b border-b-[#DDD9D9] pb-1">
              <span>Shipping Charge</span>
              <span>30.00</span>
            </div>
            <div className="flex justify-between items-center border-b border-b-[#DDD9D9] pb-1">
              <span className="font-semibold">Total Price</span>
              <span>259.99</span>
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
