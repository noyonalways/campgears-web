import { useState } from "react";
import { HiChevronDown } from "react-icons/hi2";

interface IProps {
  onPriceChange: (minPrice: number | null, maxPrice: number | null) => void;
}

const PriceRange: React.FC<IProps> = ({ onPriceChange }) => {
  const [minPrice, setMinPrice] = useState<string>("");
  const [maxPrice, setMaxPrice] = useState<string>("");
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  const handlePriceChange = () => {
    const min = minPrice ? parseInt(minPrice) : null;
    const max = maxPrice ? parseInt(maxPrice) : null;
    onPriceChange(min, max);
    setIsDropdownOpen(false);
    setMinPrice("");
    setMaxPrice("");
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className="text-site bg-transparent focus:border-brand focus:outline-none focus:ring-0 justify-between border border-primary text-sm md:text-base px-2 text-black flex items-center bg-white space-x-4 lg:px-4 py-1 rounded"
      >
        <span>Price Range</span>
        <HiChevronDown />
      </button>
      {isDropdownOpen && (
        <ul className="absolute z-[99] left-0 rounded-md overflow-hidden shadow-lg  w-max opacity-100 visible duration-200 p-1 border border-dimmed text-xs md:text-sm bg-white">
          <div className="w-full block px-3 py-2 rounded-md space-x-2">
            <span>Min</span>
            <input
              className="p-2 rounded border"
              type="number"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
              placeholder="Min Price"
            />
          </div>
          <div className="w-full block px-3 py-2 rounded-md space-x-2">
            <span>Max</span>
            <input
              className="p-2 rounded border"
              type="number"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
              placeholder="Max Price"
            />
          </div>
          <div className="px-3 py-2">
            <button
              onClick={handlePriceChange}
              className="bg-primary text-white rounded px-4 py-2"
            >
              Apply
            </button>
          </div>
        </ul>
      )}
    </div>
  );
};

export default PriceRange;
