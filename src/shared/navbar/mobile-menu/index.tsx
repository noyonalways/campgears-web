import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";

export default function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger className="lg:hidden" asChild>
        <button>
          <Menu />
        </button>
      </SheetTrigger>
      <SheetContent className="px-0" side={"left"}>
        <SheetHeader className="px-2">
          <SheetTitle className="text-left">Menu</SheetTitle>
        </SheetHeader>
        <div className="grid py-4">
          <Link
            className="block py-2 px-2 hover:bg-primary/10 hover:text-primary"
            href="/"
          >
            Home
          </Link>
          <Link
            className="block py-2 px-2 hover:bg-primary/10 hover:text-primary"
            href="/products"
          >
            Products
          </Link>
          <Link
            className="block py-2 px-2 hover:bg-primary/10 hover:text-primary"
            href="/about"
          >
            Orders
          </Link>
          <Link
            className="block py-2 px-2 hover:bg-primary/10 hover:text-primary"
            href="/contact"
          >
            Support
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
}

/* 
<div className="lg:hidden relative">
      <button>
        <Menu />
      </button>
      <div className="fixed bg-white h-screen top-0 left-0 w-2/3">
        <div className="flex items-center py-2 shadow justify-between px-2">
          <h3 className="text-xl text-primary font-medium">Menu</h3>
          <button>
            <X />
          </button>
        </div>
        <ul>
          <li>
            <Link
              className="block py-2 px-1 hover:bg-primary hover:text-white"
              href="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="block py-2 px-1 hover:bg-primary hover:text-white"
              href="/products"
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              className="block py-2 px-1 hover:bg-primary hover:text-white"
              href="/orders"
            >
              Orders
            </Link>
          </li>
          <li>
            <a
              className="block py-2 px-1 hover:bg-primary hover:text-white"
              href="#"
            >
              Customer Support
            </a>
          </li>
        </ul>
      </div>
    </div>

*/
