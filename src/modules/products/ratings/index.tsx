"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { GoStar, GoStarFill } from "react-icons/go";

const Ratings = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="w-[350px] space-y-2"
    >
      <div className="flex items-center justify-between pb-1">
        <h3 className="font-medium border-b border-b-primary pb-1">Ratings</h3>
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
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <Checkbox id="fiveStar" />
            <div className="flex items-center space-x-2 text-orange-400">
              <GoStarFill />
              <GoStarFill />
              <GoStarFill />
              <GoStarFill />
              <GoStarFill />
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Checkbox id="fiveStar" />
            <div className="flex items-center space-x-2 text-orange-400">
              <GoStarFill />
              <GoStarFill />
              <GoStarFill />
              <GoStarFill />
              <GoStar />
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Checkbox id="fiveStar" />
            <div className="flex items-center space-x-2 text-orange-400">
              <GoStarFill />
              <GoStarFill />
              <GoStarFill />
              <GoStar />
              <GoStar />
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Checkbox id="fiveStar" />
            <div className="flex items-center space-x-2 text-orange-400">
              <GoStarFill />
              <GoStarFill />
              <GoStar />
              <GoStar />
              <GoStar />
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Checkbox id="fiveStar" />
            <div className="flex items-center space-x-2 text-orange-400">
              <GoStarFill />
              <GoStar />
              <GoStar />
              <GoStar />
              <GoStar />
            </div>
          </div>
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
};

export default Ratings;
