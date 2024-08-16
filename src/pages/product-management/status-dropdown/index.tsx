import { motion } from "framer-motion";
import { forwardRef, useState } from "react";
import { HiChevronDown } from "react-icons/hi2";

type TStatus = "in-stock" | "out-of-stock" | "discontinued";

interface StatusDropdownProps {
  value: TStatus | string;
  onChange: (value: TStatus) => void;
  error?: string; // Add an error prop to show validation message
}

const StatusDropdown = forwardRef<HTMLButtonElement, StatusDropdownProps>(
  ({ value, onChange, error }, ref) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedStatus, setSelectedStatus] = useState<TStatus | string>(
      value
    ); // Initial value

    const handleButtonClick = () => {
      setIsOpen(!isOpen);
    };

    const handleStatusSelect = (status: TStatus) => {
      setSelectedStatus(status);
      onChange(status);
      setIsOpen(false);
    };

    return (
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="relative w-full group"
      >
        <button
          type="button"
          className={`py-2.5 px-3 w-full md:text-sm text-site bg-transparent border border-dimmed focus:border-brand focus:outline-none focus:ring-0 peer flex items-center justify-between rounded ${
            error ? "border-red-500" : ""
          }`}
          onClick={handleButtonClick}
          ref={ref}
        >
          <span>
            {(selectedStatus === "in-stock" && "In Stock") ||
              (selectedStatus === "out-of-stock" && "Out of Stock") ||
              "Status"}
          </span>
          <HiChevronDown />
        </button>
        <div
          className={`bg-white absolute z-[99] top-[100%] left-0 rounded-md overflow-hidden shadow-lg min-w-[200px] w-full ${
            isOpen ? "visible opacity-100" : "invisible opacity-0"
          } duration-200 p-1 border border-dimmed text-xs md:text-sm`}
        >
          <div
            className="hover:bg-secondary w-full block cursor-pointer hover:text-link px-3 py-2 rounded-md"
            onClick={() => handleStatusSelect("in-stock")}
          >
            In Stock
          </div>
          <div
            className="hover:bg-secondary w-full block cursor-pointer hover:text-link px-3 py-2 rounded-md"
            onClick={() => handleStatusSelect("out-of-stock")}
          >
            Out of Stock
          </div>
        </div>
      </motion.div>
    );
  }
);

StatusDropdown.displayName = "StatusDropdown"; // Add display name for forwardRef

export default StatusDropdown;
