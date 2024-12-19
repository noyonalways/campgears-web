import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Filter } from "lucide-react";
import Categories from "../categories";
import PriceRange from "../price-range";
import Ratings from "../ratings";

const ProductsMobileSideControls = () => {
  return (
    <Sheet>
      <SheetTrigger className="lg:hidden" asChild>
        <Button>
          <Filter />
          <span>Filter Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent
        className="px-4 bg-background w-[95%] overflow-y-scroll lg:overflow-y-hidden max-h-svh"
        side={"left"}
      >
        <SheetHeader hidden className="text-left mb-2 px-2">
          <SheetTitle hidden className="font-medium">
            User Menu
          </SheetTitle>
        </SheetHeader>
        <div className="space-y-6 pt-2">
          {/* filters */}
          <div>
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-medium border-b border-b-primary pb-1">
                Filters
              </h3>
              <button className="text-primary hover:bg-primary/10 rounded px-4 py-1">
                Clear All
              </button>
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              <button className="px-4 py-1 text-sm bg-secondary rounded">
                Tents
              </button>
              <button className="px-4 py-1 text-sm bg-secondary rounded">
                Men
              </button>
              <button className="px-4 py-1 text-sm bg-secondary rounded">
                Women
              </button>
              <button className="px-4 py-1 text-sm bg-secondary rounded">
                Camping
              </button>
            </div>
          </div>

          {/* categories */}
          <div className="w-full">
            <Categories />
          </div>

          {/* price */}
          <div className="w-full">
            <PriceRange />
          </div>

          {/* ratings */}
          <div>
            <Ratings />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default ProductsMobileSideControls;
