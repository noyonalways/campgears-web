"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ChevronDown, Search } from "lucide-react";
import { useState } from "react";

const Categories = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="w-[350px] space-y-2"
    >
      <div className="flex items-center justify-between pb-1">
        <h3 className="font-medium border-b border-b-primary pb-1">
          Categories
        </h3>
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
      <CollapsibleContent>
        <div className="w-full space-y-6">
          <form className="relative">
            <Input placeholder="Search" type="text" className="py-5" />
            <button
              type="submit"
              className="absolute right-0 top-0 bg-secondary px-3 py-3 rounded"
            >
              <Search size={18} />
            </button>
          </form>

          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Checkbox id="tents" />
              <Label htmlFor="tents">Tents</Label>
            </div>
            <div className="flex items-center space-x-3">
              <Checkbox id="sleeping-bags" />
              <Label htmlFor="sleeping-bags">Sleeping Bags</Label>
            </div>
            <div className="flex items-center space-x-3">
              <Checkbox id="backpacks" />
              <Label htmlFor="backpacks">Backpacks</Label>
            </div>
            <div className="flex items-center space-x-3">
              <Checkbox id="camping-stoves" />
              <Label htmlFor="camping-stoves">Camping Stoves</Label>
            </div>
            <div className="flex items-center space-x-3">
              <Checkbox id="lanterns" />
              <Label htmlFor="lanterns">Lanterns</Label>
            </div>
          </div>
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
};

export default Categories;
