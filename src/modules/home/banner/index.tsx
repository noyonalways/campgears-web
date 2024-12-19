import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

import Link from "next/link";

export default function Banner() {
  return (
    <section>
      <div className="container">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="bg-primary/10 p-4 md:p-6 rounded-2xl flex-1">
            <div className="w-full flex flex-col justify-center h-full space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium">Exclusive offer</span>
                <div className="bg-red-500/10 text-red-500 px-4 rounded-full text-sm">
                  30% Off
                </div>
              </div>
              <h1 className="text-4xl font-bold lg:text-5xl !leading-tight">
                <span>GEAR UP & EXPLORE YOUR </span>
                <span className="text-primary">OUTDOOR DREAMS</span>
              </h1>
              <p className="text-muted-foreground">
                Quality camping equipment for unforgettable adventures in the
                great outdoors.
              </p>
              <Link href="/shop/products" className="inline-block">
                <Button size={"lg"}>
                  Shop Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>

          <div className="basis-[30%] space-y-4">
            <div className="rounded-2xl bg-white p-6 border border-primary/30">
              <div className="mb-4">
                <span className="text-4xl font-bold text-red-500">45%</span>
                <span className="ml-1 text-lg font-medium">OFF</span>
              </div>
              <h3 className="text-2xl font-bold text-[#2C3E50]">
                Tent Collection
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Premium tents for every adventure
              </p>
              <Link
                href="/shop/products?category=tents"
                className="mt-4 inline-flex items-center text-sm font-medium text-[#2C3E50]"
              >
                Shop Now
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            <div className="rounded-2xl bg-white p-6  border border-primary/30">
              <h3 className="text-2xl font-bold text-[#2C3E50]">
                Camping Gear
              </h3>
              <p className="text-red-500">Essential Equipment</p>
              <p className="mt-2 text-sm text-gray-600">
                Start your adventure with quality gear
              </p>
              <Link
                href="/shop/products?category=equipment"
                className="mt-4 inline-flex items-center text-sm font-medium text-[#2C3E50]"
              >
                Shop Now
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
