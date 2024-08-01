import { useState } from "react";
import { HiX } from "react-icons/hi";
import {
  HiBars3,
  HiMiniMagnifyingGlass,
  HiOutlineHeart,
  HiOutlineShoppingCart,
  HiOutlineUser,
} from "react-icons/hi2";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenSearchBar, setIsOpenSearchBar] = useState(false);

  return (
    <header className="py-4 lg:py-0 lg:pt-4 font-roboto z-10 lg:border-none sticky top-0 bg-white">
      <nav className="container space-y-5">
        <div className="flex items-center justify-between">
          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden">
            {isOpen ? <HiX size={24} /> : <HiBars3 size={24} />}
          </button>
          <Link className="w-48 inline-block ml-4 md:ml-24 lg:ml-0" to="/">
            <img src={logo} alt="campgears-logo" />
          </Link>
          <div
            className={`bg-white px-2 md:px-0 w-full lg:max-w-md absolute lg:static top-[54px] py-4 lg:py-0 left-1/2 -translate-x-1/2 lg:translate-x-0 
            ${isOpenSearchBar ? "block" : "hidden lg:inline-block"} 
            `}
          >
            <form className="border w-full mx-auto max-w-md lg:max-w-md rounded-full pl-4 lg:pl-4 flex lg:justify-between font-montserrat">
              <input
                className="py-2 w-full outline-none"
                placeholder="Search Here..."
                type="search"
                name="search"
                id="search"
              />
              <button
                className="font-semibold px-4 rounded-r-full text-[#717171] hover:bg-secondary hover:text-black"
                type="submit"
              >
                <HiMiniMagnifyingGlass />
              </button>
            </form>
          </div>
          <ul className="flex items-center space-x-4 md:space-x-8">
            <button
              onClick={() => setIsOpenSearchBar(!isOpenSearchBar)}
              className="text-xl hover:text-primary lg:hidden"
            >
              <HiMiniMagnifyingGlass />
            </button>
            <li className="hidden md:inline-block">
              <Link className="text-xl hover:text-primary" to="/wishlist">
                <HiOutlineHeart />
              </Link>
            </li>
            <li className="hidden md:inline-block">
              <a className="text-xl hover:text-primary" href="#">
                <HiOutlineUser />
              </a>
            </li>
            <li className="md:inline-block">
              <Link className="text-xl hover:text-primary" to="/cart">
                <HiOutlineShoppingCart />
              </Link>
            </li>
          </ul>
        </div>
        <div
          className={`bg-white lg:bg-secondary rounded absolute w-full lg:w-auto lg:static duration-200 top-8 font-montserrat ${
            isOpen ? "left-0 " : "-left-[105%]"
          }`}
        >
          <ul className="flex flex-col w-full lg:flex-row lg:w-auto lg:justify-center lg:space-x-6">
            <li>
              <Link
                className="font-medium p-3 block hover:bg-primary hover:text-white lg:hover:bg-transparent lg:hover:text-primary lg:inline-block lg:w-auto"
                to="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="font-medium p-3 block hover:bg-primary hover:text-white lg:hover:bg-transparent lg:hover:text-primary lg:inline-block lg:w-auto"
                to="products"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                className="font-medium p-3 block hover:bg-primary hover:text-white lg:hover:bg-transparent lg:hover:text-primary lg:inline-block lg:w-auto"
                to="/product-management"
              >
                Product Management
              </Link>
            </li>
            <li>
              <Link
                className="font-medium p-3 block hover:bg-primary hover:text-white lg:hover:bg-transparent lg:hover:text-primary lg:inline-block lg:w-auto"
                to="/about-us"
              >
                About Us
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
