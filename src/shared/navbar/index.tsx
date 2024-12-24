import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Heart, Search, ShoppingCart, Zap } from "lucide-react";
import Link from "next/link";
import AllCategories from "./all-cagories";
import MainMenubar from "./menubar";
import MobileDockMenu from "./mobile-dock-menu";
import MobileMenu from "./mobile-menu";
import NavbarTop from "./navbar-topbar";
import UserDropdown from "./user-dropdown";

const Navbar = () => {
  return (
    <header className="sticky top-0 lg:static bg-background/60 z-50">
      {/* top bar */}
      {/* mobile dock menu */}
      <MobileDockMenu />

      <NavbarTop />

      <div className="backdrop-blur-lg">
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

              <div className="hidden lg:flex w-full max-w-xl">
                <Input
                  className="rounded-r-none h-12"
                  type="text"
                  placeholder="I'am search for...."
                />
                <Button className="rounded-l-none py-6 px-6">
                  <Search />
                </Button>
              </div>

              <div className="hidden lg:flex items-center space-x-6">
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
        <div className="md:pt-2 md:pb-4 hidden lg:block">
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
