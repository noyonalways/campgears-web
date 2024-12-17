import { Heart, House, ShoppingBag } from "lucide-react";
import Link from "next/link";
import MobileDockCategories from "./mobile-dock-categories";
import MobileDockSearch from "./mobile-dock-search";

const MobileDockMenu = () => {
  return (
    <div className="bg-primary flex w-full justify-between fixed bottom-0 lg:hidden px-4 text-white">
      <div className="px-2 py-3 text-xs space-y-1 flex flex-col items-center ">
        <House />
        <span className="text-white">Home</span>
      </div>

      <MobileDockCategories />

      <MobileDockSearch />

      <Link
        href={`/wishlist`}
        className="px-2 py-3 text-xs space-y-1 flex flex-col items-center"
      >
        <Heart />
        <span>My Wish</span>
      </Link>
      <Link
        href={`/cart`}
        className="px-2 py-3 text-xs space-y-1 flex flex-col items-center"
      >
        <ShoppingBag />
        <span>Cart</span>
      </Link>
    </div>
  );
};

export default MobileDockMenu;
