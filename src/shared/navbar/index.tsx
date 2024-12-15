import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import WordRotate from "@/components/ui/word-rotate";
import { Heart, MapPin, Search, ShoppingCart, Zap } from "lucide-react";
import Link from "next/link";
import AllCategories from "./all-cagories";
import MainMenubar from "./menubar";
import UserDropdown from "./user-dropdown";

const Navbar = () => {
  return (
    <header>
      {/* top bar */}
      <div className="bg-primary text-white ">
        <div className="container">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-2">
              <MapPin size={14} />
              <p>Test Location</p>
            </div>

            <WordRotate
              duration={3000}
              words={[
                "New Arrival!",
                "Winter Sale!",
                "20% Off on Camping Gear!",
                "Free Shipping on Orders Over $50",
                "Limited Time Offer - Don't Miss Out!",
              ]}
            />

            <div>
              <p>
                Need Help? Call Us:{" "}
                <span className="font-medium">+880172345641</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* logo, search, account */}
      <div className="py-4">
        <div className="container">
          <div className="flex items-center justify-between">
            <>
              <Link href={"/"}>
                <h1 className="text-3xl font-quickSand font-bold">
                  Camp<span className="text-primary">gears</span>
                </h1>
              </Link>
            </>
            <div className="w-full max-w-xl flex">
              <Input
                className="rounded-r-none h-12"
                type="text"
                placeholder="I'am search for...."
              />
              <Button className="rounded-l-none py-6 px-6">
                <Search />
              </Button>
            </div>

            <div className="flex items-center space-x-6">
              <Link className="hover:text-primary" href={"/wishlist"}>
                <Heart />
              </Link>
              <Link className="hover:text-primary" href={"/cart"}>
                <ShoppingCart />
              </Link>
              <UserDropdown />
            </div>
          </div>
        </div>
      </div>

      {/* nav links */}
      <div className="py-2">
        <div className="container">
          <div className="flex justify-between items-center">
            <AllCategories />

            <MainMenubar />

            <div>
              <Button
                size="icon"
                className="text-primary bg-primary/10 hover:bg-primary/20 hover:text-primary"
              >
                <Zap />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
