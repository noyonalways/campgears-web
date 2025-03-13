import { PageBreadcrumb } from "@/components/breadcrumbs";
import Tabs from "@/components/product-details/tabs";
import { Button } from "@/components/ui/button";
import { Dot, Heart, Minus, Plus } from "lucide-react";
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
        <div className="flex flex-col lg:flex-row lg:items-start mb-10 lg:space-x-10 gap-y-4 lg:gap-y-0">
          {/* left side */}
          <div className="lg:basis-[32%]">
            <div className="rounded-md overflow-hidden bg-secondary">
              <Image
                className="w-full"
                width={500}
                height={500}
                src={`/tent.png`}
                alt="product-image"
              />
            </div>
            <div className="grid grid-cols-4 gap-3 lg:gap-4 mt-4">
              {Array.from({ length: 4 }).map((_, index) => (
                <div
                  className="rounded overflow-hidden bg-secondary"
                  key={index + 222}
                >
                  <Image
                    className="w-full"
                    width={500}
                    height={500}
                    src={`/tent.png`}
                    alt="product-image"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* middle side*/}
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

              <div className="flex flex-col gap-y-2 mt-4">
                <span>Please hurry up! Only 10 left in stock</span>
                <div className="bg-gray-200 w-full h-2 rounded-full">
                  <div className="bg-primary h-full rounded-full w-[50%]"></div>
                </div>
              </div>
            </div>

            <div className="mt-4 border-b border-dashed pb-4 space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">More Information</h3>
                <p className="text-muted-foreground">
                  Lollipop cake chocolate chocolate cake dessert jujubes.
                  Shortbread sugar plum dessert powder cookie sweet brownie.
                </p>
              </div>
              <div className="flex flex-col gap-y-2 bg-secondary p-4 rounded-md">
                <div className="flex flex-col gap-y-2">
                  <div className="flex items-center gap-x-2">
                    <span className="flex items-center gap-x-2">
                      <Dot size={28} className="text-primary" /> Type:
                    </span>
                    <span>Cake</span>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <span className="flex items-center gap-x-2">
                      <Dot size={28} className="text-primary" /> SKU:
                    </span>
                    <span>1234567890</span>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <span className="flex items-center gap-x-2">
                      <Dot size={28} className="text-primary" /> Stock:
                    </span>
                    <span>10 items left</span>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <span className="flex items-center gap-x-2">
                      <Dot size={28} className="text-primary" /> Tags:
                    </span>
                    <span>Cake, Chocolate, Dessert</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 pb-4 space-y-2">
              <h4 className="text-lg font-medium mb-2">
                Guaranteed Safe Checkout
              </h4>
              <div className="w-full max-w-[280px]">
                <Image
                  src={`/payments.png`}
                  alt="payment"
                  width={280}
                  height={200}
                  className="w-full"
                />
              </div>
            </div>
          </div>

          {/* right side */}
          <div className="bg-secondary p-4 md:p-6 rounded">
            <h3 className="text-xl font-semibold mb-4 border-b-2 border-primary w-fit pb-1">
              Trending Products
            </h3>
            <div className="space-y-4">
              {Array.from({ length: 4 }).map((_, index) => (
                <div className="flex gap-4  " key={index + 222}>
                  <div className="w-24 h-20 rounded overflow-hidden">
                    <Image
                      className="w-full"
                      width={200}
                      height={200}
                      src={`/images/cake.jpg`}
                      alt="product-image"
                    />
                  </div>
                  <div className="border-b border-dashed">
                    <h4 className="font-medium">Creamy Chocolate Cake</h4>
                    <p className="text-primary">$35.00</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* description ,additional info, review */}
        <div className="mb-10 w-full md:max-w-[75%]">
          <Tabs />
        </div>
      </div>
    </section>
  );
};

export default ProductDetailsPage;
