// import tent from "../../assets/images/products/tent.png";

import { HiOutlineChevronRight } from "react-icons/hi";
import WishlistCard from "./wishlist-card";

interface IProps {}

const Wishlist: React.FC<IProps> = () => {
  return (
    <section className="pb-20 font-montserrat">
      <div className="container">
        <div className="flex items-center space-x-2 py-3 mb-4 font-montserrat text-[#717171]">
          <span>Home</span>
          <HiOutlineChevronRight />
          <span>Wishlist</span>
        </div>
        <div className="font-semibold lg:flex items-center border-b p-4 rounded hidden">
          <div className="flex items-center basis-[55%]">
            <span className="basis-[23%]"></span>
            <span className="flex-1 lg:ml-5">Name</span>
          </div>
          <div className="flex items-center flex-1 justify-between">
            <div className="flex items-center basis-[65%] justify-between">
              <span>Price</span>
              <span>Quantity</span>
              <span>Stock Status</span>
            </div>
            <span></span>
          </div>
        </div>
        <div className="space-y-4">
          <WishlistCard />
          <WishlistCard />
          <WishlistCard />
        </div>
      </div>
    </section>
  );
};

export default Wishlist;
