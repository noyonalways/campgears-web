import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

const SortByDropdown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={`secondary`}>
          <span>Sort By</span>
          <ChevronDown />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start">
        <DropdownMenuItem>Popularity</DropdownMenuItem>
        <DropdownMenuItem>Low - High Price</DropdownMenuItem>
        <DropdownMenuItem>High - Low Price</DropdownMenuItem>
        <DropdownMenuItem>A - Z Order</DropdownMenuItem>
        <DropdownMenuItem>Z - A Order</DropdownMenuItem>
        <DropdownMenuItem>Average Rating</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default SortByDropdown;
