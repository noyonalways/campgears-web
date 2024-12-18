"use client";

import WordRotate from "@/components/ui/word-rotate";
import { MapPin, X } from "lucide-react";
import { useState } from "react";

const NavbarTop = () => {
  const [hidden, setHidden] = useState(false);
  return (
    <div
      className={`bg-primary text-white relative duration-200 ${
        hidden ? "hidden" : "block"
      }`}
    >
      <button
        onClick={() => setHidden(!hidden)}
        className="absolute right-2 top-2"
      >
        <X size={16} />
      </button>
      <div className="container">
        <div className="flex justify-center md:justify-between items-center text-xs md:text-sm">
          <div className="hidden md:flex items-center space-x-2">
            <MapPin size={14} />
            <p>Dhaka, Bangladesh</p>
          </div>

          <WordRotate
            duration={3000}
            words={[
              "Explore the Outdoors with New Arrivals!",
              "Gear Up for Winter Adventures – Sale On Now!",
              "Exclusive: 20% Off All Camping Essentials!",
              "Enjoy Free Shipping on Orders Over $50!",
              "Hurry! Limited-Time Offers on Outdoor Gear!",
            ]}
          />

          <div className="hidden md:inline-block">
            <p>
              <span>Need Help? Call Us:</span>
              <span className="font-medium">+8801712345678</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarTop;
