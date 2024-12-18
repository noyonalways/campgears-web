import { PageBreadcrumb } from "@/components/breadcrumbs";
import ProductCard from "@/components/cards/product-card";
import { Button } from "@/components/ui/button";
import SortByDropdown from "@/modules/products/sortby-dropdown";
import { LayoutGrid, List } from "lucide-react";

const ProductsPage = () => {
  return (
    <section>
      <PageBreadcrumb currentPage="Products" />
      <div className="container lg:my-10">
        <div className="flex">
          {/* left sidebar */}
          <div className="hidden lg:block basis-[22%] border-r border-dashed">
            <div className="lg:pr-4">
              <div className="flex justify-between items-center">
                <h3 className="font-medium">Filters</h3>
                <button className="text-primary hover:bg-primary/10 rounded px-4 py-1">
                  Clear All
                </button>
              </div>
            </div>
          </div>

          {/* main contents */}
          <div className="flex-1">
            <div className="lg:pl-5">
              <div className="bg-primary/10 flex justify-end p-4 lg:p-6 rounded">
                <div className="bg-primary text-white w-full text-xl lg:text-4xl font-bold p-4 lg:p-6 rounded max-w-md">
                  Explore the amazing gears and Accessories
                </div>
              </div>

              <div className="flex justify-between items-center my-4">
                <div className="flex items-center space-x-2">
                  <span className="text-sm md:text-base">Sort By</span>
                  {/* <Button variant={`secondary`}>
                    <span>Popularity</span>
                    <ChevronDown />
                  </Button> */}
                  <SortByDropdown />
                </div>
                <div className="flex space-x-2 items-center">
                  <span className="text-muted-foreground text-sm">View as</span>
                  <div className="flex space-x-2">
                    <Button size={`icon`}>
                      <LayoutGrid size={20} />
                    </Button>
                    <Button size={`icon`} variant={`secondary`}>
                      <List size={20} />
                    </Button>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4 lg:gap-6">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsPage;
