import { PageBreadcrumb } from "@/components/breadcrumbs";
import { Button } from "@/components/ui/button";
import { Heart, Minus, Plus } from "lucide-react";
import Image from "next/image";
import { GoStar, GoStarFill } from "react-icons/go";

interface IProps {
  params: Promise<string>;
}

const ProductDetailsPage = async ({}: IProps) => {
  return (
    <section>
      <PageBreadcrumb currentPage="Product Details" />
      <div className="container">
        <div className="flex flex-col lg:flex-row mb-10 lg:gap-x-20 gap-y-4 lg:gap-y-0">
          <div className="lg:basis-[35%]">
            <div className="rounded overflow-hidden">
              <Image
                className="w-full"
                width={500}
                height={500}
                src={`/images/cake.jpg`}
                alt="product-image"
              />
            </div>
            <div className="grid grid-cols-4 gap-3 lg:gap-4 mt-4">
              {Array.from({ length: 4 }).map((_, index) => (
                <div className="rounded overflow-hidden" key={index + 222}>
                  <Image
                    className="w-full"
                    width={500}
                    height={500}
                    src={`/images/cake.jpg`}
                    alt="product-image"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* right side */}
          <div className="flex-1">
            <span className="px-4 py-1 rounded bg-destructive/20 text-destructive text-sm inline-block mb-4">
              30% OFF
            </span>
            <h1 className="text-2xl lg:text-3xl font-bold mb-4 text-center lg:text-left">
              Creamy Chocolate Cake
            </h1>
            <div className="flex flex-col gap-y-2 lg:gap-y-0 lg:flex-row items-center lg:justify-between mb-4">
              <div className="flex items-end space-x-2">
                <h2 className="text-primary font-semibold text-2xl">$35.00</h2>
                <span className="line-through  text-muted-foreground">
                  $58.46
                </span>
              </div>

              <div className="flex items-center space-x-2">
                <div className="flex items-center space-x-1 text-orange-400">
                  <GoStarFill />
                  <GoStarFill />
                  <GoStarFill />
                  <GoStarFill />
                  <GoStar />
                </div>
                <span className="text-sm text-muted-foreground">
                  23 Customer Review
                </span>
              </div>
            </div>
            <p className="text-muted-foreground border-b border-dashed pb-4">
              Lollipop cake chocolate chocolate cake dessert jujubes. Shortbread
              sugar plum dessert powder cookie sweet brownie. Cake cookie apple
              pie dessert sugar plum muffin cheesecake.
            </p>

            <div className="mt-4 border-b border-dashed pb-4">
              <div className="flex flex-col lg:flex-row lg:items-center gap-4 mb-4">
                <div className="flex items-center justify-between bg-secondary p-1 rounded-md w-[45%] lg:w-[35%]">
                  <Button
                    className="!bg-background"
                    variant={`secondary`}
                    size={`icon`}
                  >
                    <Minus />
                  </Button>
                  <span>0</span>
                  <Button
                    className="!bg-background"
                    variant={`secondary`}
                    size={`icon`}
                  >
                    <Plus />
                  </Button>
                </div>
                <Button className="w-full " size={"lg"}>
                  Add to Cart
                </Button>
              </div>
              <button className="flex space-x-2 items-center text-sm py-1 rounded">
                <Heart size={20} />
                <span>Add to Wishlist</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailsPage;
