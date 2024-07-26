import { useState } from "react";
import { HiMinus, HiOutlineTrash, HiPlus } from "react-icons/hi2";
import tent from "../../../assets/images/products/tent.png";

interface IProps {}

const CartCard: React.FC<IProps> = () => {
  const [quantity, setQuantity] = useState(1);

  const decrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const increment = () => {
    setQuantity(quantity + 1);
  };
  return (
    <div className="flex border-t border-b flex-col py-4 px-2 lg:flex-row items-center lg:p-4 lg:border justify-between lg:rounded relative">
      <button className="absolute lg:right-4 right-2 top-2 lg:top-4 text-[#717171] text-lg hover:bg-[#E7ECEF] p-2 lg:p-3 rounded-full duration-100 active:scale-95">
        <HiOutlineTrash />
      </button>
      <div className="flex items-start lg:items-center space-x-2 lg:space-x-0 justify-between basis-full lg:basis-[60%] my-6 lg:my-0">
        <figure className="w-44 lg:w-40 rounded overflow-hidden">
          <img src={tent} alt="" />
        </figure>
        <h2 className="font-bold lg:max-w-xs">
          Inflatable Camping Tent Air Seconds 4.1 F&B 4 Person 1 Bedroom
        </h2>
      </div>
      <div className="flex lg:justify-between space-x-8 lg:space-x-0 items-center basis-full lg:basis-[35%]">
        <div className="flex flex-col lg:block">
          <span className="lg:hidden font-semibold mb-1">Price</span>
          <span>$ 299.99</span>
        </div>
        <div className="flex flex-col items-center lg:block">
          <span className="lg:hidden font-semibold mb-1">Quantity</span>
          <div className="items-center flex justify-between space-x-4">
            <button
              onClick={decrement}
              className="bg-[#e7ecef] size-8 flex justify-center items-center rounded-sm active:scale-95 duration-100"
            >
              <HiMinus />
            </button>
            <span>{quantity.toString().padStart(2, "0")}</span>
            <button
              onClick={increment}
              className="bg-[#e7ecef] size-8 flex justify-center items-center rounded-sm active:scale-95 duration-100"
            >
              <HiPlus />
            </button>
          </div>
        </div>
        <div className="flex flex-col lg:block">
          <span className="lg:hidden font-semibold mb-1">Subtotal</span>
          <span>$ 299.99</span>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
