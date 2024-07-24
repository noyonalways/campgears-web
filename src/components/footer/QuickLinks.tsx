const QuickLinks = () => {
  return (
    <div className="space-y-3">
      <h2 className="text-lg font-bold text-black">Quick Links</h2>
      <ul className="space-y-2">
        <li>
          <a className="hover:underline" href="#">
            Home
          </a>
        </li>
        <li>
          <a className="hover:underline" href="#">
            Best Selling Products
          </a>
        </li>
        <li>
          <a className="hover:underline" href="#">
            Categories
          </a>
        </li>
        <li>
          <a className="hover:underline" href="#">
            Featured Products
          </a>
        </li>
        <li>
          <a className="hover:underline" href="#">
            Adventure Groups
          </a>
        </li>
        <li>
          <a className="hover:underline" href="#">
            All Products
          </a>
        </li>
      </ul>
    </div>
  );
};

export default QuickLinks;
