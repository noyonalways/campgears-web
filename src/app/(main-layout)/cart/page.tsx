import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
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
        <div>
          <h1>Cart Page</h1>
        </div>
      </div>
    </section>
  );
};

export default CartPage;
