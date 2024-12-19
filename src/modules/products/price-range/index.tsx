"use client";

import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

type PriceRangeProps = {
  minPrice?: number;
  maxPrice?: number;
  onPriceChange?: (min: number, max: number) => void;
};

const PriceRange = ({
  minPrice = 0,
  maxPrice = 70,
  onPriceChange,
}: PriceRangeProps) => {
  const [isOpen, setIsOpen] = useState(true);
  const [range, setRange] = useState([0, 30]);

  const handleSliderChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const value = parseInt(event.target.value, 10);
    const newRange = [...range];

    // Ensure the sliders do not cross
    if (index === 0 && value <= range[1]) {
      newRange[0] = value;
    } else if (index === 1 && value >= range[0]) {
      newRange[1] = value;
    }

    setRange(newRange);

    if (onPriceChange) {
      onPriceChange(newRange[0], newRange[1]);
    }
  };

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="w-[350px] space-y-2"
    >
      <div className="flex items-center justify-between pb-1">
        <h3 className="font-medium border-b border-b-primary pb-1">Price</h3>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="icon" className="rounded-full">
            <ChevronDown
              size={20}
              className={`transform duration-200 ${
                isOpen ? "rotate-180" : "rotate-0"
              }`}
            />
          </Button>
        </CollapsibleTrigger>
      </div>
      <CollapsibleContent className="space-y-6">
        <div className="w-full">
          {/* Min and Max Labels */}
          <div className="flex justify-between text-gray-600 text-sm">
            <span>${minPrice}</span>
            <span>${maxPrice}</span>
          </div>

          {/* Slider */}
          <div className="relative flex items-center mt-4">
            {/* Tooltip for Min Thumb */}
            <div
              className="absolute -top-8 transform -translate-x-1/2 bg-gray-700 text-white text-xs px-2 py-1 rounded"
              style={{
                left: `calc(${
                  ((range[0] - minPrice) / (maxPrice - minPrice)) * 100
                }%)`,
              }}
            >
              ${range[0]}
            </div>

            {/* Tooltip for Max Thumb */}
            <div
              className="absolute -top-8 transform -translate-x-1/2 bg-gray-700 text-white text-xs px-2 py-1 rounded"
              style={{
                left: `calc(${
                  ((range[1] - minPrice) / (maxPrice - minPrice)) * 100
                }%)`,
              }}
            >
              ${range[1]}
            </div>

            <input
              type="range"
              min={minPrice}
              max={maxPrice}
              value={range[0]}
              onChange={(e) => handleSliderChange(e, 0)}
              className="absolute w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
            <input
              type="range"
              min={minPrice}
              max={maxPrice}
              value={range[1]}
              onChange={(e) => handleSliderChange(e, 1)}
              className="absolute w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
            <div
              className="absolute h-2 bg-teal-600 rounded-full"
              style={{
                left: `${
                  ((range[0] - minPrice) / (maxPrice - minPrice)) * 100
                }%`,
                width: `${
                  ((range[1] - range[0]) / (maxPrice - minPrice)) * 100
                }%`,
              }}
            ></div>
          </div>

          {/* Selected Price Range */}
          <div className="flex justify-between items-center mt-4">
            <div className="text-sm text-gray-800">${range[0]}</div>
            <div className="text-sm text-gray-800">${range[1]}</div>
          </div>
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
};

export default PriceRange;
