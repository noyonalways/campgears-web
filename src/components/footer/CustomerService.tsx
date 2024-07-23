const CustomerService = () => {
  return (
    <div className="space-y-3">
      <h2 className="text-lg font-bold text-[#2d2d2d]">Customer Service</h2>
      <ul className="space-y-2">
        <li className="space-x-1">
          <span className="font-medium">Contact Us:</span>
          <a href="#">support@campgears.com</a>
        </li>
        <li className="space-x-1">
          <span className="font-medium">FAQ:</span>
          <a href="#">Frequently Asked Questions</a>
        </li>
        <li className="space-x-1">
          <span className="font-medium">Returns:</span>
          <a href="#">Return Policy</a>
        </li>
        <li className="space-x-1">
          <span className="font-medium">Shipping:</span>
          <a href="#">Shipping Policy</a>
        </li>
      </ul>
    </div>
  );
};

export default CustomerService;
