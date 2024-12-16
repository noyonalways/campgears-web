import { Heart, House, ShoppingBag } from "lucide-react";
import MobileDockCategories from "./mobile-dock-categories";
import MobileDockSearch from "./mobile-dock-search";

const MobileDockMenu = () => {
  return (
    <div className="bg-primary flex w-full justify-between fixed bottom-0 md:hidden px-4">
      <div className="px-2 py-3 text-xs space-y-1 flex flex-col items-center">
        <House />
        <span>Home</span>
      </div>

      <MobileDockCategories />

      <MobileDockSearch />

      <div className="px-2 py-3 text-xs space-y-1 flex flex-col items-center">
        <Heart />
        <span>My Wish</span>
      </div>
      <div className="px-2 py-3 text-xs space-y-1 flex flex-col items-center">
        <ShoppingBag />
        <span>Cart</span>
      </div>
    </div>
  );
};

export default MobileDockMenu;
