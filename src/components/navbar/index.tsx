import {
  HiMiniMagnifyingGlass,
  HiOutlineHeart,
  HiOutlineMagnifyingGlass,
  HiOutlineShoppingCart,
  HiOutlineUser,
} from "react-icons/hi2";
import logo from "../../assets/images/logo.png";

const Navbar = () => {
  return (
    <header className="py-3 font-roboto">
      <nav className="container space-y-5">
        <div className="flex items-center justify-between">
          <a className="w-48 inline-block" href="#">
            <img src={logo} alt="campgears-logo" />
          </a>
          <form className="border border-secondary rounded-full pl-4 max-w-md w-full flex justify-between">
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
          <ul className="flex items-center lg:space-x-8">
            <button className="text-xl outline-none">
              <HiOutlineMagnifyingGlass />
            </button>
            <li>
              <a className="text-xl" href="/cart">
                <HiOutlineHeart />
              </a>
            </li>
            <li>
              <a className="text-xl" href="#">
                <HiOutlineUser />
              </a>
            </li>
            <li>
              <a className="text-xl" href="#">
                <HiOutlineShoppingCart />
              </a>
            </li>
          </ul>
        </div>
        <div className="bg-secondary rounded">
          <ul className="flex items-center justify-center space-x-6">
            <li>
              <a className="font-medium p-3 inline-block" href="#">
                Home
              </a>
            </li>
            <li>
              <a className="font-medium p-3 inline-block" href="#">
                Products
              </a>
            </li>
            <li>
              <a className="font-medium p-3 py-2 inline-block" href="#">
                About Us
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
