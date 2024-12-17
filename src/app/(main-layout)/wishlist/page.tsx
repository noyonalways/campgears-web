import { PageBreadcrumb } from "@/components/breadcrumbs";
import WishlistCard from "@/components/cards/wishlist-card";
import { LayoutGrid, List } from "lucide-react";

const WishlistPage = () => {
  return (
    <section className="pb-10">
      <PageBreadcrumb currentPage="Wishlist" />

      <div className="container">
        <div className="flex justify-end py-2">
          <div className="flex space-x-2 items-center">
            <h3>View as</h3>
            <div className="flex items-center space-x-1">
              <button className="hover:text-primary rounded-md p-2">
                <LayoutGrid />
              </button>
              <button className="hover:text-primary rounded-md p-2">
                <List />
              </button>
            </div>
          </div>
        </div>

        {/* main contents */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-2 md:gap-4">
          {Array.from({ length: 15 }).map((_, index) => (
            <WishlistCard key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WishlistPage;
