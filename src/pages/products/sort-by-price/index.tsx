import { forwardRef, useState } from "react";
import { HiChevronDown } from "react-icons/hi2";

interface SortByPriceProps {
  onSelect: (value: string) => void;
  error?: boolean;
}

const SortByPrice = forwardRef<HTMLButtonElement, SortByPriceProps>(
  ({ onSelect, error }, ref) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);

    const handleButtonClick = () => {
      setIsOpen(!isOpen);
    };

    const handleOptionSelect = (option: string) => {
      setSelectedOption(option);
      onSelect(option);
      setIsOpen(false);
    };

    return (
      <div className="relative group">
        <button
          type="button"
          className={`border border-primary text-sm md:text-base px-2 text-black flex items-center bg-white space-x-4 lg:px-4 py-1 rounded ${
            error ? "border-red-500" : ""
          }`}
          onClick={handleButtonClick}
          ref={ref}
        >
          <span>
            {selectedOption === "price"
              ? "Price: Low to High"
              : selectedOption === "-price"
              ? "Price: High to Low"
              : "Sort by Price"}
          </span>
          <HiChevronDown />
        </button>
        <div
          className={`bg-white absolute z-50 top-full left-0 rounded-md overflow-hidden shadow-lg w-full ${
            isOpen ? "visible opacity-100" : "invisible opacity-0"
          } duration-200 p-1 border border-dimmed text-xs lg:text-sm`}
        >
          <div
            className="hover:bg-secondary w-full block cursor-pointer hover:text-link px-2 md:px-3 py-2 rounded-md"
            onClick={() => handleOptionSelect("price")}
          >
            Price: Low to High
          </div>
          <div
            className="hover:bg-secondary w-full block cursor-pointer hover:text-link px-2 md:px-3 py-2 rounded-md"
            onClick={() => handleOptionSelect("-price")}
          >
            Price: High to Low
          </div>
        </div>
      </div>
    );
  }
);

SortByPrice.displayName = "SortByPrice";

export default SortByPrice;
