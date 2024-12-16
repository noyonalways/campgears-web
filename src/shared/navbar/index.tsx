import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import WordRotate from "@/components/ui/word-rotate";
import { Heart, MapPin, Search, ShoppingCart, Zap } from "lucide-react";
import Link from "next/link";
import AllCategories from "./all-cagories";
import MainMenubar from "./menubar";
import MobileDockMenu from "./mobile-dock-menu";
import MobileMenu from "./mobile-menu";
import UserDropdown from "./user-dropdown";

const Navbar = () => {
  return (
    <header className="sticky top-0 bg-background">
      {/* top bar */}
      <div className="bg-primary text-white ">
        {/* mobile dock menu */}
        <MobileDockMenu />

        <div className="container">
          <div className="flex justify-center md:justify-between items-center text-xs md:text-sm">
            <div className="hidden md:flex items-center space-x-2">
              <MapPin size={14} />
              <p>Dhaka, Bangladesh</p>
            </div>

            <WordRotate
              duration={3000}
              words={[
                "Explore the Outdoors with New Arrivals!",
                "Gear Up for Winter Adventures – Sale On Now!",
                "Exclusive: 20% Off All Camping Essentials!",
                "Enjoy Free Shipping on Orders Over $50!",
                "Hurry! Limited-Time Offers on Outdoor Gear!",
              ]}
            />

            <div className="hidden md:inline-block">
              <p>
                <span>Need Help? Call Us:</span>
                <span className="font-medium">+8801712345678</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="">
        {/* logo, search, account */}
        <div className="py-3 md:py-4">
          <div className="container">
            <div className="flex items-center justify-between">
              {/* mobile menu bars */}
              <MobileMenu />
              <>
                <Link href={"/"}>
                  <h1 className="text-3xl font-quickSand font-bold">
                    Camp<span className="text-primary">gears</span>
                  </h1>
                </Link>
              </>

              {/* mobile user menu */}
              <div className="lg:hidden">
                <UserDropdown />
              </div>

              <div className="hidden md:flex w-full max-w-xl">
                <Input
                  className="rounded-r-none h-12"
                  type="text"
                  placeholder="I'am search for...."
                />
                <Button className="rounded-l-none py-6 px-6">
                  <Search />
                </Button>
              </div>

              <div className="hidden md:flex items-center space-x-6">
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
        <div className="md:pt-2 md:pb-4">
          <div className="container">
            <div className="flex justify-between items-center">
              <div className="hidden md:inline-block">
                <AllCategories />
              </div>

              <div className="hidden md:inline-block">
                <MainMenubar />
              </div>

              <div className="hidden md:inline-block">
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
      </div>
    </header>
  );
};

export default Navbar;
