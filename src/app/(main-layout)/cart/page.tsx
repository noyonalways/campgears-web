import CartCard from "@/components/cards/cart-card";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import { TiHome } from "react-icons/ti";

const CartPage = () => {
  return (
    <section>
      <div className="bg-secondary py-4 md:py-10">
        <div className="container">
          <div className="flex justify-between items-center ">
            <h2 className="text-2xl font-bold">Cart</h2>
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
                    Cart
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="flex flex-col lg:flex-row items-start my-10 gap-y-6 lg:gap-x-10">
          <div className="bg-secondary px-6 lg:flex-1 rounded lg:overflow-hidden overflow-x-scroll w-full">
            <CartCard />
            <CartCard />
            <CartCard />
          </div>

          <div className="bg-secondary w-full lg:w-auto lg:basis-[25%]">
            <h2 className="p-4 lg:p-6 lg:pb-4 font-semibold border-b border-dashed">
              Cart Total
            </h2>
            <div className="px-6 py-4 border-b border-dashed">
              <p className="text-sm mb-1">Coupon Apply</p>
              <div className="flex w-full mb-4">
                <input
                  placeholder="Enter Coupon Code Here"
                  className="px-3 py-2 bg-white w-full border border-primary outline-none rounded rounded-r-none"
                  type="text"
                />
                <Button className="bg-primary text-white px-4 rounded rounded-l-none py-6">
                  Apply
                </Button>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <p>Subtotal</p>
                  <p>$35.00</p>
                </div>
                <div className="flex justify-between items-center">
                  <p>Coupon Discount</p>
                  <p>0.00</p>
                </div>
                <div className="flex justify-between items-center">
                  <p>Shipping</p>
                  <p>$5.00</p>
                </div>
              </div>
            </div>
            <div className="px-6 py-4 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">Total (USD)</h3>
                <h3 className="text-lg text-primary font-semibold">$40.00</h3>
              </div>
              <div className="flex flex-col space-y-2">
                <Button className="py-6">
                  Process To Checkout <ArrowRight />
                </Button>
                <Button className="py-6" variant={"outline"}>
                  <ArrowLeft />
                  <span>Return to Shipping</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartPage;
