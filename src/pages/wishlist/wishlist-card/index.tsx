import { addToCart } from "../../../redux/features/cart/cartSlice";
import { removeFromWishlist } from "../../../redux/features/wishlist/wishlistSlice";
import { useAppDispatch } from "../../../redux/hook";
import RemoveProductConfirmationModal from "../remove-product-modal";
interface IProps {
  _id: string;
  image: string;
  name: string;
  stockQuantity: number;
  price: number;
  status: string;
  addedData: Date;
}

const WishlistCard: React.FC<IProps> = ({
  _id,
  name,
  price,
  stockQuantity,
  status,
  addedData,
  image,
}) => {
  const dispatch = useAppDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({ _id, price, quantity: 1 }));
    dispatch(removeFromWishlist({ _id }));
  };

  return (
    <div className="border lg:border-b lg:border-0 flex flex-col space-y-4 lg:space-y-0 lg:flex-row lg:items-center justify-between rounded pb-6 pt-12 lg:p-2 relative">
      <div className="flex lg:items-center space-x-2 lg:space-x-6 lg:mr-6 lg:basis-1/2">
        <RemoveProductConfirmationModal productId={_id} />
        <figure className="max-w-24 md:max-w-32 lg:max-w-24 rounded overflow-hidden">
          <img src={image} alt="product-image" />
        </figure>
        <h2 className="font-medium lg:max-w-sm">{name}</h2>
      </div>
      <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 items-center flex-1 justify-between">
        <div className="flex w-full lg:w-auto px-4 md:px-8 items-center flex-1 justify-between lg:px-10">
          <div className="flex flex-col text-center lg:block">
            <span className="lg:hidden font-medium mb-1">Price</span>
            <span>$ {price}</span>
          </div>
          <div className="flex flex-col text-center lg:block lg:mr-6">
            <span className="lg:hidden font-medium mb-1">Quantity</span>
            <span>{stockQuantity}</span>
          </div>
          <div className="flex flex-col text-center lg:block">
            <span className="lg:hidden font-medium mb-1">Stock Status</span>
            <span>{status}</span>
          </div>
        </div>
        <div className="flex flex-col items-center lg:space-y-0 lg:ml-10 lg:pr-2">
          <span className="text-xs mb-2">
            Added on {new Date(addedData)?.toDateString()}
          </span>

          <div className="flex space-x-4">
            <button
              disabled={stockQuantity < 1}
              onClick={handleAddToCart}
              className="btn px-4 py-1 text-sm disabled:cursor-not-allowed disabled:bg-primary/40"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishlistCard;
