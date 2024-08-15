import { useEffect, useState } from "react";
import { HiMinus, HiPlus } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { updateQuantity } from "../../../redux/features/cart/cartSlice";
import { useAppDispatch } from "../../../redux/hook";
import ConfirmRemoveProductModal from "./confirm-remove-product-modal";

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
  const dispatch = useAppDispatch();

  useEffect(() => {
    // Update subtotal whenever quantity changes
    setSubtotal(quantity * price);
    dispatch(updateQuantity({ _id, newQuantity: quantity }));
  }, [quantity, price, dispatch, _id]);

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
    <div className="flex border-t border-b flex-col py-6 px-2 lg:flex-row items-center lg:p-4 lg:border justify-between lg:rounded relative">
      <ConfirmRemoveProductModal productId={_id} />
      <div className="flex items-start lg:items-center space-x-2 lg:space-x-4 basis-full lg:basis-[60%] my-6 lg:my-0">
        <figure className="w-48 lg:w-40 rounded overflow-hidden">
          <img className="w-full" src={image} alt="" />
        </figure>
        <Link
          to={`/products/${slug! + "_" + _id}`}
          className="font-bold lg:max-w-xs hover:text-primary"
        >
          {name.length > 30 ? name.substring(0, 30) + "..." : name}
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
