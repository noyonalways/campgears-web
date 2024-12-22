import { PageBreadcrumb } from "@/components/breadcrumbs";
import ProductCard from "@/components/cards/product-card";
import { Button } from "@/components/ui/button";
import ProductsMobileSideControls from "@/modules/products/products-mobile-side-controls";
import ProductsSideControls from "@/modules/products/products-side-controls";
import SortByDropdown from "@/modules/products/sortby-dropdown";
import { getProducts } from "@/services/product";
import { Footer, Navbar } from "@/shared";
import { IProduct } from "@/types/product";
import { LayoutGrid, List } from "lucide-react";
const ProductsPage = async () => {
  const res = await getProducts();
  const products = res?.data as IProduct[];

  return (
    <>
      <Navbar />
      <section>
        <PageBreadcrumb currentPage="Products" />
        <div className="container lg:my-10 mb-10">
          <div className="flex items-start">
            {/* left sidebar */}
            <div className="hidden lg:block basis-[22%] border-r border-dashed">
              <ProductsSideControls />
            </div>

            {/* main contents */}
            <div className="flex-1">
              <div className="lg:pl-5">
                <div className="bg-primary/10 flex justify-end p-4 lg:p-6 rounded">
                  <div className="bg-primary text-white w-full text-xl lg:text-4xl font-bold p-4 lg:p-6 rounded max-w-md">
                    Explore the amazing gears and Accessories
                  </div>
                </div>

                {/* products mobile side controls */}
                <div className="mt-4">
                  <ProductsMobileSideControls />
                </div>

                <div className="flex justify-between items-center my-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm md:text-base">Sort By</span>
                    <SortByDropdown />
                  </div>
                  <div className="flex space-x-2 items-center">
                    <span className="text-muted-foreground text-sm">
                      View as
                    </span>
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

                {/* products cards */}
                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4 lg:gap-6">
                  {products.map((product) => (
                    <ProductCard key={product._id} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ProductsPage;
