import { useState } from "react";
import { HiChevronDown } from "react-icons/hi2";

type TStatus = "In Stock" | "Out of Stock";

const StatusDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState("Status"); // Initial value

  const handleButtonClick = () => {
    setIsOpen(!isOpen);
  };

  const handleStatusSelect = (status: TStatus) => {
    setSelectedStatus(status);
    setIsOpen(false);
  };

  return (
    <div className="relative w-full group">
      <button
        className="py-2.5 px-3 w-full md:text-sm text-site bg-transparent border border-dimmed focus:border-brand focus:outline-none focus:ring-0 peer flex items-center justify-between rounded"
        onClick={handleButtonClick}
      >
        <span>{selectedStatus}</span>
        <HiChevronDown />
      </button>
      <div
        className={`bg-white absolute z-[99] top-[100%] left-0 rounded-md overflow-hidden shadow-lg min-w-[200px] w-full ${
          isOpen ? "visible opacity-100" : "invisible opacity-0"
        } duration-200 p-1 border border-dimmed text-xs md:text-sm`}
      >
        <div
          className="hover:bg-secondary w-full block cursor-pointer hover:text-link px-3 py-2 rounded-md"
          onClick={() => handleStatusSelect("In Stock")}
        >
          In Stack
        </div>
        <div
          className="hover:bg-secondary w-full block cursor-pointer hover:text-link px-3 py-2 rounded-md"
          onClick={() => handleStatusSelect("Out of Stock")}
        >
          Out of Stock
        </div>
      </div>
    </div>
  );
};

export default StatusDropdown;
