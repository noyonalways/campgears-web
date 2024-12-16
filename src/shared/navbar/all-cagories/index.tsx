import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { TbCategory } from "react-icons/tb";

const categories = [
  { name: "Tents", url: "/products?category=tents" },
  { name: "Sleeping Bags", url: "/products?category=sleeping-bags" },
  { name: "Camping Stoves", url: "/products?category=stoves" },
  { name: "Trekking Poles", url: "/products?category=trekking-poles" },
  { name: "Backpacks", url: "/products?category=backpacks" },
  { name: "Camping Lanterns", url: "/products?category=lanterns" },
  { name: "Hiking Boots", url: "/products?category=boots" },
  { name: "Outdoor Clothing", url: "/products?category=clothing" },
  { name: "Camping Chairs", url: "/products?category=camping-chairs" },
];

const AllCategories = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="px-4 justify-start" size="lg">
          <TbCategory />
          <span>All Categories</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="start">
        {categories.map((category) => (
          <DropdownMenuItem key={category.name}>
            <Link className="w-full" href={category.url}>
              {category.name}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default AllCategories;
