import WishlistCard from "@/components/cards/wishlist-card";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { LayoutGrid, List } from "lucide-react";
import Link from "next/link";
import { TiHome } from "react-icons/ti";

const WishlistPage = () => {
  return (
    <section className="pb-10">
      <div className="bg-secondary py-4 md:py-10">
        <div className="container">
          <div className="flex justify-between items-center ">
            <h2 className="text-2xl font-bold">Wishlist</h2>
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <Link href="/">
                    <TiHome size={20} />
                  </Link>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage className="font-semibold">
                    Wishlist
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>
      </div>

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
