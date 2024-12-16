import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { LayoutGrid } from "lucide-react";
import Link from "next/link";

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

const MobileDockCategories = () => {
  return (
    <Sheet>
      <SheetTrigger className="lg:hidden" asChild>
        <div className="px-2 py-3 text-xs space-y-1 flex flex-col items-center">
          <LayoutGrid />
          <span>Category</span>
        </div>
      </SheetTrigger>
      <SheetContent className="px-0" side={"right"}>
        <SheetHeader className="px-2">
          <SheetTitle className="text-left">All Categories</SheetTitle>
        </SheetHeader>
        <ul className="grid py-4">
          {categories.map((category) => (
            <li key={category.name}>
              <Link
                className="w-full hover:bg-primary/10 hover:text-primary block py-2 px-2"
                href={category.url}
              >
                {category.name}
              </Link>
            </li>
          ))}
        </ul>
      </SheetContent>
    </Sheet>
  );
};

export default MobileDockCategories;
