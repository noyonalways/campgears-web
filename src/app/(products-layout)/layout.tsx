import { PageBreadcrumb } from "@/components/breadcrumbs";
import ProductsMobileSideControls from "@/modules/products/products-mobile-side-controls";
import ProductsSideControls from "@/modules/products/products-side-controls";
import SortByDropdown from "@/modules/products/sortby-dropdown";
import ViewToggle from "@/modules/products/view-toggle";
import { Footer, Navbar } from "@/shared";
import { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

const ProductsLayout = async ({ children }: IProps) => {
  return (
    <>
      <Navbar />
      <main>
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

                    <ViewToggle />
                  </div>

                  {/* products cards */}
                  {children}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ProductsLayout;
