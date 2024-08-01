import { HiOutlineTrash } from "react-icons/hi2";
import tent from "../../../assets/images/products/tent.png";
interface IProps {}

const WishlistCard: React.FC<IProps> = () => {
  return (
    <div className="border lg:border-b lg:border-0 flex flex-col space-y-4 lg:space-y-0 lg:flex-row lg:items-center justify-between rounded pb-6 pt-10 lg:p-2 relative">
      <div className="flex lg:items-center space-x-2 lg:space-x-6 lg:mr-6 lg:basis-1/2">
        <button className="absolute lg:static right-2 top-2 lg:top-4 text-[#717171] text-lg hover:bg-[#E7ECEF] p-2 lg:p-3 rounded-full duration-100 active:scale-95">
          <HiOutlineTrash />
        </button>
        <figure className="max-w-24 md:max-w-32 lg:max-w-24 rounded overflow-hidden">
          <img src={tent} alt="product-image" />
        </figure>
        <h2 className="font-medium lg:max-w-sm">
          Inflatable Camping Tent Air Seconds 4.1 F&B 4 Person 1 Bedroom
        </h2>
      </div>
      <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 items-center flex-1 justify-between">
        <div className="flex w-full lg:w-auto px-4 md:px-8 items-center flex-1 justify-between lg:px-10">
          <div className="flex flex-col text-center lg:block">
            <span className="lg:hidden font-medium mb-1">Price</span>
            <span>$ 299.99</span>
          </div>
          <div className="flex flex-col text-center lg:block lg:mr-6">
            <span className="lg:hidden font-medium mb-1">Quantity</span>
            <span>99</span>
          </div>
          <div className="flex flex-col text-center lg:block">
            <span className="lg:hidden font-medium mb-1">Stock Status</span>
            <span>In Stock</span>
          </div>
        </div>
        <div className="flex flex-col items-center lg:space-y-0 lg:ml-10 lg:pr-2">
          <span className="mb-2 text-sm">Added on July 26, 2024</span>
          <div className="flex space-x-4">
            <button className="btn px-4 py-1 text-sm">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishlistCard;
