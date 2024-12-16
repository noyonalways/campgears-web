import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { LayoutGrid, List, X } from "lucide-react";
import Image from "next/image";
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
            <div
              key={index}
              className="p-2 md:p-4 rounded-md bg-secondary group relative"
            >
              <button className="absolute right-2 top-2 bg-white rounded-full p-2 shadow">
                <X size={15} />
              </button>
              <div className="flex justify-center mb-2 group-hover:scale-105 duration-100">
                <Image
                  src={`/tent.png`}
                  width={150}
                  height={150}
                  alt="product-image"
                />
              </div>
              <p className="mb-1 text-sm">Tent</p>
              <h3 className="font-semibold">
                This is a product dummy title goes here
              </h3>
              <small>Q: 10</small>
              <div className="flex items-end space-x-1 mb-2">
                <h2 className="text-primary font-semibold">$102</h2>
                <small className="line-through text-muted-foreground">
                  $150
                </small>
              </div>
              <div>
                <button className="bg-white px-4 py-2 flex items-center justify-center w-full rounded-full">
                  Add
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WishlistPage;
