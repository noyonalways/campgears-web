import logo from "../../assets/images/campgears-logo.png";

const Navbar = () => {
  return (
    <header className="py-3">
      <nav className="container space-y-5">
        <div className="flex items-center justify-between">
          <a className="w-48 inline-block" href="#">
            <img className="invert" src={logo} alt="campgears-logo" />
          </a>
          <form className="bg-secondary rounded-full px-6 max-w-sm w-full flex justify-between lg:space-x-3">
            <input
              className="py-2 bg-secondary w-full outline-none"
              placeholder="Search Here..."
              type="search"
              name="search"
              id="search"
            />
            <button className="font-semibold" type="submit">
              Search
            </button>
          </form>
          <ul className="flex items-center lg:space-x-6">
            <li>
              <a className="font-medium" href="#">
                Wishlist
              </a>
            </li>
            <li>
              <a className="font-medium" href="#">
                Login
              </a>
            </li>
            <li>
              <a className="font-medium" href="#">
                Cart
              </a>
            </li>
          </ul>
        </div>
        <div className="bg-secondary rounded">
          <ul className="flex items-center lg:justify-center space-x-6">
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
