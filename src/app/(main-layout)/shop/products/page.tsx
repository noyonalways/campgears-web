import { PageBreadcrumb } from "@/components/breadcrumbs";

const ProductsPage = () => {
  return (
    <section>
      <PageBreadcrumb currentPage="Products" />
      <div className="container lg:my-10">
        <div className="flex h-screen">
          {/* left sidebar */}
          <div className="basis-[22%] border-r border-dashed">
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
              <div className="bg-primary/10 flex justify-end lg:p-6 rounded">
                <div className="bg-primary text-white w-full lg:text-4xl font-bold lg:p-6 rounded max-w-md">
                  Explore the amazing gears and Accessories
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsPage;
