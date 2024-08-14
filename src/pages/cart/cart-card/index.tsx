import { useEffect, useState } from "react";
import { HiMinus, HiOutlineTrash, HiPlus } from "react-icons/hi2";
import { Link } from "react-router-dom";

interface IProps {
  _id: string;
  image: string;
  name: string;
  slug: string;
  price: number;
  cartAddedQuantity: number;
  stockQuantity: number;
}

const CartCard: React.FC<IProps> = ({
  _id,
  image,
  name,
  slug,
  price,
  cartAddedQuantity,
  stockQuantity,
}) => {
  const [quantity, setQuantity] = useState(cartAddedQuantity);
  const [subtotal, setSubtotal] = useState(cartAddedQuantity * price);

  useEffect(() => {
    // Update subtotal whenever quantity changes
    setSubtotal(quantity * price);
  }, [quantity, price]);

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increment = () => {
    if (quantity < stockQuantity) {
      setQuantity(quantity + 1);
    }
  };

  return (
    <div className="flex border-t border-b flex-col py-4 px-2 lg:flex-row items-center lg:p-4 lg:border justify-between lg:rounded relative">
      <button className="absolute lg:right-4 right-2 top-2 lg:top-4 text-[#717171] text-lg hover:bg-[#E7ECEF] p-2 lg:p-3 rounded-full duration-100 active:scale-95">
        <HiOutlineTrash />
      </button>
      <div className="flex items-start lg:items-center space-x-2 lg:space-x-4 basis-full lg:basis-[60%] my-6 lg:my-0">
        <figure className="w-44 lg:w-40 rounded overflow-hidden">
          <img src={image} alt="" />
        </figure>
        <Link
          to={`/products/${slug! + "_" + _id}`}
          className="font-bold lg:max-w-xs hover:text-primary"
        >
          {name}
        </Link>
      </div>
      <div className="flex lg:justify-between space-x-8 lg:space-x-0 items-center basis-full lg:basis-[35%]">
        <div className="flex flex-col lg:block">
          <span className="lg:hidden font-semibold mb-1">Price</span>
          <span>$ {price}</span>
        </div>
        <div className="flex flex-col items-center lg:block">
          <span className="lg:hidden font-semibold mb-1">Quantity</span>
          <div className="items-center flex justify-between space-x-4">
            <button
              disabled={quantity === 1}
              onClick={decrement}
              className="bg-[#e7ecef] size-8 flex justify-center items-center rounded-sm active:scale-95 duration-100 disabled:cursor-not-allowed"
            >
              <HiMinus />
            </button>
            <span>{quantity.toString().padStart(2, "0")}</span>
            <button
              onClick={increment}
              disabled={quantity === stockQuantity}
              className="bg-[#e7ecef] size-8 flex justify-center items-center rounded-sm active:scale-95 duration-100 cursor-pointer disabled:cursor-not-allowed"
            >
              <HiPlus />
            </button>
          </div>
        </div>
        <div className="flex flex-col lg:block">
          <span className="lg:hidden font-semibold mb-1">Subtotal</span>
          <span>$ {subtotal}</span>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
