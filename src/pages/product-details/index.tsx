import { useState } from "react";
import {
  HiMinus,
  HiOutlineChevronRight,
  HiOutlineStar,
  HiPlus,
} from "react-icons/hi";
import { HiOutlineHeart } from "react-icons/hi2";
import tent from "../../assets/images/products/tent.png";
import Button from "../../components/ui/button";

interface IProps {}

const ProductDetails: React.FC<IProps> = () => {
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
    <section className="py-10">
      <div className="container">
        <div className="flex items-center space-x-2 py-3 mb-4 font-montserrat text-[#717171]">
          <span>Products</span>
          <HiOutlineChevronRight />
          <span>Camping</span>
          <HiOutlineChevronRight />
          <span>Tents</span>
        </div>
        <div className="flex flex-col space-y-6 lg:space-y-0 lg:flex-row lg:space-x-6">
          <div className="grid grid-cols-2 gap-2 lg:gap-6 lg:basis-2/3">
            <div>
              <img className="rounded" src={tent} alt="" />
            </div>
            <div>
              <img className="rounded" src={tent} alt="" />
            </div>
          </div>
          <div className="basis-1/3">
            <h3 className="text-sm uppercase font-semibold font-montserrat mb-2 bg-secondary px-3 rounded-md py-1 inline-block">
              XYZ
            </h3>
            <h1 className="text-3xl font-bold mb-3 font-montserrat">
              Inflatable Camping Tent Air Seconds 4.1 F&B 4 Person 1 Bedroom
            </h1>
            <div className="flex items-center space-x-5 mb-2 font-roboto">
              <div className="text-sm space-x-2 flex items-center text-[#898989]">
                <HiOutlineStar />
                <span>4.5</span>
              </div>
              <span>|</span>
              <div>
                <span className="text-[#167D7F] text-sm">1592 reviews</span>
              </div>
            </div>
            <div className="mb-4 space-y-1 font-montserrat">
              <p className="font-semibold text-black">In Stock</p>
              <p className="text-black">Only 9 left</p>
            </div>
            <p className="mb-4 font-roboto">
              Swiftly inflate this all-in-one tent! Enjoy a spacious living
              space and patented F&B technology for cooler, darker nights. Pump
              not included, order: 8601387
            </p>
            <p className="mb-4 font-montserrat text-black">
              <span className="font-semibold">Color:</span>{" "}
              <span>Cappuccino beige</span>
            </p>
            <h3 className="text-2xl font-bold mb-4 font-montserrat">
              $ 299.99
            </h3>
            <div className="flex items-end mb-4 font-montserrat justify-between">
              <div className="space-y-2 basis-[35%]">
                <span>Quantity</span>
                <div className=" items-center flex justify-between">
                  <button
                    onClick={decrement}
                    className="bg-[#e7ecef] size-10 flex justify-center items-center rounded-sm active:scale-95 duration-100"
                  >
                    <HiMinus />
                  </button>
                  <span>{quantity.toString().padStart(2, "0")}</span>
                  <button
                    onClick={increment}
                    className="bg-[#e7ecef] size-10 flex justify-center items-center rounded-sm active:scale-95 duration-100"
                  >
                    <HiPlus />
                  </button>
                </div>
              </div>
              <div className="flex items-center space-x-8">
                <Button>Add to Cart</Button>
                <button className="group active:scale-90 duration-100">
                  <HiOutlineHeart
                    size={28}
                    className="group-hover:fill-pink-500 group-hover:text-pink-500"
                  />
                </button>
              </div>
            </div>
            <p className="font-montserrat text-black">
              <span className="font-semibold">Categories:</span>{" "}
              <span>Tents</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
