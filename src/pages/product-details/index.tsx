import { useState } from "react";
import tent from "../../assets/images/products/tent.png";
import Button from "../../components/ui/button";

interface IProps {}

const ProductDetails: React.FC<IProps> = () => {
  const [quantity, setQuantity] = useState(0);

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
        <div className="flex items-center space-x-2 py-3 mb-4">
          <span>Products</span>
          <span>{">"}</span>
          <span>Camping</span>
          <span>{">"}</span>
          <span>Tents</span>
        </div>
        <div className="flex space-x-6">
          <div className="grid grid-cols-2 gap-6 lg:basis-2/3">
            <div>
              <img className="rounded" src={tent} alt="" />
            </div>
            <div>
              <img className="rounded" src={tent} alt="" />
            </div>
          </div>
          <div className="basis-1/3">
            <h1 className="text-2xl font-bold mb-3">
              Inflatable Camping Tent Air Seconds 4.1 F&B 4 Person 1 Bedroom
            </h1>
            <div className="flex items-center space-x-5 mb-2">
              <div className="text-sm space-x-2">
                <span>Star</span>
                <span>4.5</span>
              </div>
              <span>|</span>
              <div>
                <span className="text-[#33c9c9] text-sm">1592 reviews</span>
              </div>
            </div>
            <div className="mb-4 space-y-1">
              <p className="font-medium">In Stock</p>
              <p>Only 9 left</p>
            </div>
            <p className="mb-4">
              Swiftly inflate this all-in-one tent! Enjoy a spacious living
              space and patented F&B technology for cooler, darker nights. Pump
              not included, order: 8601387
            </p>
            <p className="mb-4">
              <span className="font-medium">Color:</span>{" "}
              <span>Cappuccino beige</span>
            </p>
            <h3 className="text-xl font-bold mb-4">$ 299.99</h3>
            <div className="flex items-end space-x-6 mb-4">
              <div className="space-y-2">
                <span>Quantity</span>
                <div className="space-x-4 items-center flex">
                  <button
                    onClick={decrement}
                    className="bg-[#e7ecef] size-10 text-2xl gird content-center leading-none"
                  >
                    {"-"}
                  </button>
                  <span>{quantity}</span>
                  <button
                    onClick={increment}
                    className="bg-[#e7ecef] size-10 text-2xl gird content-center leading-none"
                  >
                    {"+"}
                  </button>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Button>Add to Cart</Button>
                <button>Wishlist</button>
              </div>
            </div>
            <p>
              <span className="font-medium">Categories:</span>{" "}
              <span>Tents</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
