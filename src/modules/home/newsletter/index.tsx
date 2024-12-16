"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tent } from "lucide-react";

export default function Newsletter() {
  return (
    <section className="py-8">
      <div className="container">
        <div className="flex flex-col items-center md:flex-row md:justify-between bg-primary/10 p-4 md:p-6 rounded-xl">
          <div className="max-w-xl">
            <h2 className="text-3xl font-bold  sm:text-4xl lg:text-5xl">
              Gear up for your next adventure
            </h2>
            <p className="mt-4 text-muted-foreground">
              Join our community of outdoor enthusiasts and get exclusive deals
              on camping gear
            </p>
            <form className="mt-6 flex items-stretch lg:max-w-md w-full">
              <Input
                className="bg-white rounded-r-none h-14"
                type="email"
                placeholder="Enter your email"
              />
              <Button className="rounded-l-none py-7" type="submit">
                Subscribe
              </Button>
            </form>
          </div>
          <div className="">
            <Tent className="h-64 w-64 text-primary/50" />
          </div>
        </div>
      </div>
    </section>
  );
}
